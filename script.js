document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    // Simulate user login credentials
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful!";
        // Redirect to another page or perform other actions here
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid username or password.";
    }
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const profilePicInput = document.getElementById("profile-pic");
  const profilePicPreview = document.getElementById("profile-pic-preview");
  const form = document.getElementById("profile-form");
  const calendarLinkInput = document.getElementById("calendar-link");
  const preferredTimes = document.getElementById("preferred-times");

  // Profile Picture Preview
  profilePicInput.addEventListener("change", () => {
    const file = profilePicInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        profilePicPreview.src = reader.result;
        profilePicPreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  // Sync Calendar Button
  document.getElementById("sync-calendar").addEventListener("click", (event) => {
    event.preventDefault();
    const calendarLink = calendarLinkInput.value.trim();
    if (calendarLink) {
      alert(`Your Google Calendar has been linked: ${calendarLink}`);
    } else {
      alert("Please provide a valid Google Calendar link.");
    }
  });

  // Save Profile
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const selectedTimes = Array.from(preferredTimes.selectedOptions).map(option => option.value);

    if (!username || selectedTimes.length === 0) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Profile saved successfully!\nUsername: ${username}\nPreferred Times: ${selectedTimes.join(", ")}`);
  });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const eventNameDisplay = document.getElementById("event-name-display");
  const groupMembersDisplay = document.getElementById("group-members");
  const meetingDateDisplay = document.getElementById("meeting-date");
  const availabilityList = document.getElementById("availability");
  const reminderStatus = document.getElementById("reminder-status");
  const commentBox = document.getElementById("comment-box");
  const commentList = document.getElementById("comment-list");

  // Event Data (Example Data)
  const eventData = {
    name: "Group Project Meeting",
    members: ["Alice", "Bob", "Charlie", "Dana"],
    meetingDate: "2024-12-01",
    availability: {
      "2024-11-28": ["Alice", "Charlie"],
      "2024-11-29": ["Bob", "Dana"],
      "2024-12-01": ["Alice", "Bob", "Charlie", "Dana"],
    },
  };

  // Initialize Event Info
  eventNameDisplay.textContent = eventData.name;
  groupMembersDisplay.textContent = eventData.members.join(", ");
  meetingDateDisplay.textContent = eventData.meetingDate;

  // Populate Availability List
  for (const [date, members] of Object.entries(eventData.availability)) {
    const listItem = document.createElement("li");
    listItem.textContent = `${date}: ${members.join(", ")}`;
    availabilityList.appendChild(listItem);
  }

  // Handle Reminder Setting
  document.getElementById("set-reminder").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    if (email) {
      reminderStatus.textContent = `Reminder set for ${email}.`;
      reminderStatus.style.color = "green";
    } else {
      reminderStatus.textContent = "Please enter a valid email.";
      reminderStatus.style.color = "red";
    }
  });

  // Handle Comments
  document.getElementById("add-comment").addEventListener("click", () => {
    const commentText = commentBox.value.trim();
    if (commentText) {
      const commentItem = document.createElement("li");
      commentItem.textContent = commentText;
      commentList.appendChild(commentItem);
      commentBox.value = ""; // Clear comment box
    } else {
      alert("Please enter a comment.");
    }
  });
});
