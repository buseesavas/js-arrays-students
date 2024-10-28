let students = [
  {
    id: 1,
    name: "Atakan",
    lastname: "Arıkan",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 2,
    name: "Busenur",
    lastname: "Savaş",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 3,
    name: "Ece",
    lastname: "Kubilay",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 4,
    name: "Elif Yağmur",
    lastname: "Şahin",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 5,
    name: "Gaye",
    lastname: "Dinç",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 6,
    name: "Gökdeniz",
    lastname: "Keleş",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 7,
    name: "Hilal",
    lastname: "Baran",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 8,
    name: "Mehmet Akif",
    lastname: "Küçükyılmaz",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 9,
    name: "Merve",
    lastname: "Özel",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 10,
    name: "Muhammet Ali",
    lastname: "Şafak",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 11,
    name: "Ömer",
    lastname: "Kuluç",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
];

const studentBox = document.querySelector(".studentsList");
const erkeklerBtn = document.querySelector(".erkeklerBtn");
const kadinlarBtn = document.querySelector(".kadinlarBtn");
const karisikBtn = document.querySelector(".karisikBtn");
const ogrenciSayisi = document.querySelector('.count');

function listele(ogrenciler) {
  studentBox.innerHTML = "";
  ogrenciler.forEach(student => {
    studentBox.innerHTML += `
      <li class="student">
        ${student.name} <span>${student.lastname}</span> -<span>${student.section}</span>
      </li>`;
  });
  ogrenciSayisi.textContent = `Toplam Öğrenci Sayısı: ${ogrenciler.length}`;
}

erkeklerBtn.addEventListener("click", () => {
  const erkekOgrenciler = students.filter(student => student.gender === "Erkek");
  listele(erkekOgrenciler);
});

kadinlarBtn.addEventListener("click", () => {
  const kadinOgrenciler = students.filter(student => student.gender === "Kadın");
  listele(kadinOgrenciler);
});

karisikBtn.addEventListener("click", () => {
  listele(students);
});

listele(students);