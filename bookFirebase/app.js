import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    updateDoc,
    doc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Use EXACT config from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDX-XY0bnLzsDxMDdoPNwDVTyO8H1rY7Gk",
  authDomain: "bookmanagementapp-8ee32.firebaseapp.com",
  projectId: "bookmanagementapp-8ee32",
  storageBucket: "bookmanagementapp-8ee32.firebasestorage.app",
  messagingSenderId: "145383552184",
  appId: "1:145383552184:web:b9dea927c02c724a59304d",
  measurementId: "G-GR5H216B2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const form = document.getElementById("bookForm");

const booksCol = collection(db, "books");
const container = document.getElementById("container");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

     const data = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        price: Number(document.getElementById("price").value),
        coverImageURL: document.getElementById("image").value
    };

    await addDoc(booksCol, data);

    form.reset();
});

function renderBooks(books) {
    container.innerHTML = "";

    books.forEach(book => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${book.coverImageURL}" alt="">
            <h3>${book.title}</h3>
            <p><strong>${book.author}</strong></p>
            <p>₹ ${book.price}</p>

            <button class="updateBtn">Update Author</button>
            <button class="deleteBtn">Delete</button>
        `;

        // Update Author
        div.querySelector(".updateBtn").onclick = async () => {
            const newName = prompt("New Author:", book.author);
            if (!newName) return;

            await updateDoc(doc(db, "books", book.id), {
                author: newName
            });
        };

        // Delete Book
        div.querySelector(".deleteBtn").onclick = async () => {
            await deleteDoc(doc(db, "books", book.id));
        };

        container.appendChild(div);
    });
}

onSnapshot(booksCol, snapshot => {
    const books = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    renderBooks(books);
});