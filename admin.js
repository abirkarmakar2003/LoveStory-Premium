import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQMOVIHGZo48ok87t8v7dZvlRCFw4P460",
  authDomain: "lovestory-premium.firebaseapp.com",
  projectId: "lovestory-premium",
  storageBucket: "lovestory-premium.firebasestorage.app",
  messagingSenderId: "461215061284",
  appId: "1:461215061284:web:9cb864fdeae0553dbbcfb1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadData() {

    const querySnapshot = await getDocs(collection(db, "responses"));

    let html = "";
    let total = 0;

    querySnapshot.forEach((doc) => {

        total++;
        

        const d = doc.data();

        html += `
<tr>
    <td>${d.receiver || ""}</td>
    <td>${d.sender || ""}</td>
    <td>${d.date || ""}</td>
    <td>${Array.isArray(d.foods) ? d.foods.join(", ") : ""}</td>
    <td>${d.activity || ""}</td>
    <td>${d.time || ""}</td>
    <td>
        <button onclick="deleteResponse('${doc.id}')">
            🗑️ Delete
        </button>
    </td>
</tr>
`;

    });

    document.getElementById("tableData").innerHTML = html;
    document.getElementById("totalResponse").innerHTML =
"❤️ Total Responses : " + total;

}

window.deleteResponse = async function(id) {

    const ok = confirm("এই response-টা delete করতে চাও?");

    if (!ok) return;

    try {

        await deleteDoc(doc(db, "responses", id));

        alert("✅ Response Deleted");

        loadData();

    } catch (e) {

        console.error(e);

        alert("❌ Delete Failed");

    }

}

window.checkLogin = function () {

    const password = document.getElementById("password").value;

    if (password === "Abir@2026") {

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";

        loadData();

    }

}
window.searchTable = function () {

    let input = document.getElementById("searchBox").value.toLowerCase();

    let rows = document.querySelectorAll("#tableData tr");

    rows.forEach(row => {

        let text = row.innerText.toLowerCase();

        if (text.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}