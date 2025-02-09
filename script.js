const colleges = [
    { university: "KTU", name: "College of Engineering Trivandrum", location: "Thiruvananthapuram", seats: 840, type: "Government" },
    { university: "KTU", name: "TKM College of Engineering", location: "Kollam", seats: 840, type: "Government" },
    { university: "NIT", name: "NIT Calicut", location: "Kozhikode", seats: 138, type: "Government" },
    { university: "KTU", name: "Government Engineering College Idukki", location: "Idukki", seats: 300, type: "Government" },
    { university: "KTU", name: "Government Engineering College Thrissur", location: "Thrissur", seats: 840, type: "Government" },
    { university: "KTU", name: "Government Model Engineering College", location: "Ernakulam", seats: 600, type: "Government" },
    { university: "KTU", name: "Mar Athanius College of Engineering", location: "Ernakulam", seats: 600, type: "Government-Aided" },
    { university: "KTU", name: "Rajiv Gandhi Institute of Technology", location: "Kottayam", seats: 390, type: "Government" },
    { university: "KTU", name: "Jyothi Engineering College", location: "Thrissur", seats: 552, type: "Private" },
    { university: "KTU", name: "College of Engineering Perumon", location: "Kollam", seats: 300, type: "Government aided" },
    { university: "KTU", name: "College of Engineering Thalassery", location: "Kannur", seats: 450, type: "Government" },
    { university: "KTU", name: "Sree Chitra Thirunal College of Engineering", location: "Thiruvananthapuram", seats: 420, type: "Government-Aided" },
    { university: "KTU", name: "College of Engineering Adoor", location: "Pathanamthitta", seats: 360, type: "Government-Aided" },
    { university: "CUSAT", name: "CUSAT", location: "Ernakulam", seats: 570, type: "Government-Aided" },
    { university: "KTU", name: "Federal Institute of Sience and Technology", location: "Ernakulam", seats: 660, type: "Private" },
    { university: "KERALA UNIVERSITY", name: "University College of Engineering Kariavattam", location: "Thiruvananthapuram", seats: 318, type: "Government" },
    { university: "KTU", name: "Amal Jyothi College of Engineering", location: "Kottayam", seats: 780, type: "Private" },
    { university: "KTU", name: "Carmel College of Engineering and Technology", location: "Alappuzha", seats: 300, type: "Private" },
    { university: "KTU", name: "Kottayam Institute of Technology and Science", location: "Kottayam", seats: 180, type: "Private" },
    { university: "MGU", name: "KMP College of Engineering ", location: "Ernakulam", seats: 315, type: "Private" },
    { university: "KTU", name: "MG College of Engineering", location: "Thiruvananthapuram", seats: 60, type: "Private" },
    { university: "KTU", name: "Malabar Institute of Technology", location: "Kannur", seats: 198, type: "Private" },
    { university: "KTU", name: "Mar Baselios College of Engineering and Technology", location: "Thiruvananthapuram", seats: 630, type: "Private" },
    { university: "KTU", name: "Mohandas College of Engineering and Technology", location: "Thiruvananthapuram", seats: 360, type: "Private" },
    { university: "KTU", name: "Musaliar College of Engineering", location: "Thiruvananthapuram", seats: 480, type: "Private" },
    { university: "KTU", name: "Muslim Association College of Engineerning", location: "Thiruvananthapuram", seats: 270, type: "Private" },
    { university: "KTU", name: "Muthoot Institute of Technology", location: "Ernakulam", seats: 480, type: "Private" },
    { university: "KTU", name: "Sarabai Institute of science and Technology", location: "Thiruvananthapuram", seats: 390, type: "Private" },
    { university: "KTU", name: "Saintgits  College of Engineering ", location: "Kottayam", seats: 780, type: "Private" },
    { university: "KTU", name: "Sahrdaya College of Engineering and Technology", location: "Thrissur", seats: 480, type: "Private" },
    { university: "KTU", name: "John Cox Memorial C S I Institute of Technology", location: "Thiruvananthapuram", seats: 270, type: "Private" },
    { university: "KTU", name: "Jawaharlal College of Engineering and Technology", location: "Palakad", seats: 360, type: "Private" },
    { university: "KTU", name: "Ilahia College of Engineering and Technology", location: "Ernakulam", seats: 640, type: "Private" },
    { university: "KTU", name: "IES  College of Engineering ", location: "Thrissur", seats: 300, type: "Private" },
    { university: "KTU", name: "MGM College of Engineering and Technology", location: "Ernakulam", seats: 480, type: "Private" },
    { university: "KTU", name: "Aryanet Institute of Technology", location: "Palakad", seats: 300, type: "Private" },
    { university: "UNIVERSITY OF CALICUT", name: "Ammini College of Engineering ", location: "Palakad", seats: 300, type: "Private" },
    { university: "KTU", name: "College of Engineering Muttathara", location: "Thiruvannanthapuram", seats: 300, type: "Government-Aided" },
    { university: "KTU", name: "LBS College of Engineering ", location: "Kozhikode", seats: 462, type: "Government-Aided" },
    { university: "KTU", name: "NSS College of Engineering ", location: "Palakad", seats: 640, type: "Government-Aided" },
    { university: "KTU", name: "College of Engineering Attingal ", location: "Thiruvananthapuram", seats: 300, type: "Government-Aided" },
    { university: "KTU", name: "Rajagiri School of Engineering and Technology", location: "Ernakulam", seats: 720, type: "Private" },
    { university: "KTU", name: "VISAT Engineering College ", location: "Thiruvananthapuram", seats: 300, type: "Private" },
    { university: "KTU", name: "UKF College of Engineering and Technology ", location: "Kollam", seats: 468, type: "Private" },
    { university: "KTU", name: " Trinity College of Engineering ", location: "Thiruvannanthapuram", seats: 210, type: "Private" },
    { university: "KTU", name: "Vidya Academy of Science and Technology", location: "Thrissur", seats: 330, type: "Private" },
    { university: "KTU", name: "HERA College of Engineering and Technology ", location: "Thiruvananthapuram", seats: 300, type: "Private" },
    { university: "KTU", name: "Government Engineering College Barton Hill ", location: "Thiruvananthapuram", seats: 330, type: "Government" },
    { university: "KTU", name: " Lourdes Matha College of Science and Technology ", location: "Thiruvannanthapuram", seats: 390, type: "Private" },
    
    
];

function displayColleges(collegesList) {
    const tableBody = document.getElementById("collegeList");
    tableBody.innerHTML = "";

    collegesList.forEach(college => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${college.university}</td>
            <td class="clickable" onclick="openCollegePage('${college.name}')">${college.name}</td>
            <td>${college.location}</td>
             <td>${college.seats}</td>
            <td>${college.type}</td>
        `;
        tableBody.appendChild(row);
    });
}

function openCollegePage(collegeName) {
    window.location.href = `college.html?name=${encodeURIComponent(collegeName)}`;
}

function filterColleges() {
    const universityFilter = document.getElementById("university").value;
    const typeFilter = document.getElementById("collegeType").value;
    const seatsFilter = document.getElementById("seats").value;
    const locationFilter = document.getElementById("location").value;

    const filteredColleges = colleges.filter(college => {
        return (universityFilter === "all"||  college.university === universityFilter) &&
               (typeFilter === "all"||  college.type === typeFilter) &&
               
               (locationFilter === "all" || college.location === locationFilter);
    });

    displayColleges(filteredColleges);
}

document.addEventListener("DOMContentLoaded", () => {
    displayColleges(colleges);
    document.querySelectorAll("select").forEach(select => {
        select.addEventListener("change", filterColleges);
    });
});