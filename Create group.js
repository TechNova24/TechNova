document.addEventListener('DOMContentLoaded', () => {
    // Store group data globally
    const groupData = {
        leader: null,
        members: [],
        availableDates: {}
    };

    // DOM elements
    const createGroupBtn = document.getElementById('createGroupBtn');
    const joinGroupBtn = document.getElementById('joinGroupBtn');
    const addDateBtn = document.getElementById('addDateBtn');
    const createGroupSection = document.getElementById('createGroupSection');
    const proposeDatesSection = document.getElementById('proposeDatesSection');
    const userNameInput = document.getElementById('userName');
    const groupLinkInput = document.getElementById('groupLink');
    const groupLinkText = document.getElementById('groupLinkText');
    const dateInput = document.getElementById('dateInput');
    const proposedDatesList = document.getElementById('proposedDatesList');
    const generatedLink = document.getElementById('generatedLink');

    // Show the create group section initially
    createGroupSection.style.display = 'block';

    // Logic to create group
    createGroupBtn.addEventListener('click', () => {
        const groupName = document.getElementById('groupName').value.trim();
        if (!groupName) {
            alert('Group name is required!');
            return;
        }
    
        // Sanitize the group name to make it URL-safe
        const sanitizedGroupName = groupName.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
        const groupLink = `https://GatherUp/${sanitizedGroupName}`;
    
        // Update the link in the DOM
        const groupLinkText = document.getElementById('groupLinkText');
        groupLinkText.href = groupLink;
        groupLinkText.textContent = groupLink;
        generatedLink.style.display = 'block';
    
        alert(`Group "${groupName}" created successfully! Share the link with your members.`);
    });
    

    // Logic to join group
    joinGroupBtn.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        const groupLink = groupLinkInput.value.trim();

        if (!userName || !groupLink) {
            alert('Both your name and the group link are required!');
            return;
        }

        if (!groupData.members.includes(userName)) {
            groupData.members.push(userName);
        }

        alert(`${userName} joined the group!`);
        proposeDatesSection.style.display = 'block'; // Display the propose dates section for members
        updateAvailabilityCalendar();
    });

    // Add available dates
    addDateBtn.addEventListener('click', () => {
        const selectedDate = dateInput.value.trim();
        const userName = userNameInput.value.trim();

        if (!selectedDate) {
            alert('Please select a date.');
            return;
        }

        if (!groupData.availableDates[selectedDate]) {
            groupData.availableDates[selectedDate] = [];
        }

        if (!groupData.availableDates[selectedDate].includes(userName)) {
            groupData.availableDates[selectedDate].push(userName);
        }

        updateAvailabilityCalendar();
    });

    // Display all availability dates
    function updateAvailabilityCalendar() {
        proposedDatesList.innerHTML = '';

        for (const [date, members] of Object.entries(groupData.availableDates)) {
            const li = document.createElement('li');
            li.textContent = `${date}: Available Members - ${members.join(', ')}`;
            proposedDatesList.appendChild(li);
        }
    }
});
