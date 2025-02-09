const collegeData = {
    "College of Engineering Trivandrum": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/cet.jpg",
        courses: ["B.Tech Civil Engineering", "B.Tech Mechanical Engineering", "B.Tech Computer Science"],
        placement: "85% placements"
    },
    "TKM College of Engineering": {
        location: "Kollam, Kerala",
        image: "images/tkm.jpg",
        courses: ["B.Tech Electrical Engineering", "B.Tech Electronics & Communication", "B.Tech Architecture"],
        placement: "78% placements"
    },
    "NIT Calicut": {
        location: "Kozhikode, Kerala",
        image: "images/nitc.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering"],
        placement: "95% placements"
    },
    "Government Model Engineering College": {
        location: "Ernakulan, Kerala",
        image: "images/gmec.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Electronics Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics"],
        placement: "70% placements"
    },
    "Mar Athanasius College of Engineering": {
        location: "Ernakulan, Kerala",
        image: "images/mace.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Artifical Intelligence"],
        placement: "74% placements"
    },
    "Rajiv Gandhi Institute of Technology": {
        location: "Kottayam, Kerala",
        image: "images/rgit.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "Master of Computer Application","B.Tech Electronics and Communication","B.Tech Electrical and Electronics"],
        placement: "60% placements"
    },
    "Jyothi Engineering College": {
        location: "Thrissur, Kerala",
        image: "images/gmec.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechatronics Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Robitics and Automation","Artificial Intelligence and Data Science"],
        placement: "60% placements"
    },
    "Government Engineering College Idukki": {
        location: "Idukki, Kerala",
        image: "images/geci.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Information Technology","B.Tech Electronics and Communication","B.Tech Electrical and Electronics"],
        placement: "60% placements"
    },
    "College of Engineering Perumon": {
        location: "Kollam, Kerala",
        image: "images/cep.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Electronics and Computer","Artificial Intelligence and Data Science"],
        placement: "69.36% placements"
    },
    "College of Engineering Thalassery": {
        location: "Pathanmthitta, Kerala",
        image: "images/coet.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "60% placements"
    },
    "Sree Chitra Thirunal College of Engineering": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/sct.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Biotechnology and Biochemical"],
        placement: "69% placements"

    },
    "College of Engineering Adoor": {
        location: "Pathanamthitta, Kerala",
        image: "images/coea.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", ,"B.Tech Electronics and Communication","B.Tech Electrical and Electronics"],
        placement:"64% placements"
    },
    "CUSAT": {
        location: "Ernakulam, Kerala",
        image: "images/cusat.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology","Safety and Fire Engineering"],
        placement: "74% placements"
    },
    "Fedral Institute of Science and Technology": {
        location: "Ernakulam, Kerala",
        image: "images/fist.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "80.05% placements"
    },
    "University College of Engineering Kariavattam": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/coet.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Electronics and Communication","Information Technology"],
        placement: "60% placements"
    },
    " Amal Jyothi College of Engineering ": {
        location: "Kottayam, Kerala",
        image: "images/ajce.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology","Artificial Intelligence and Data Science"],
        placement: "40% placements"
    },
    " Carmel College of Engineering and Technology ": {
        location: "Alappuzha, Kerala",
        image: "images/ccet.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electrical and Electronics"],
        placement: "46.21% placements"
    },
    "Kottayam Institute of Science and Technology": {
        location: "Kottayam, Kerala",
        image: "images/kist.jpg",
        courses: ["B.Tech Computer Science",  "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics"],
        placement: "70% placements"
    },
    " KMP College of Engineering ": {
        location: "Ernakulam, Kerala",
        image: "images/kmp.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "66.6% placements"
    },
    " MG College of Engineering ": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/mg.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication"],
        placement:"50% placements"
    },
    "Malabar Institute of Technology": {
        location: "Kannur, Kerala",
        image: "images/mit.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "62% placements"
    },
    " Mar Baselios College of Engineering and Technology": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/mbc.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "54% placements"
    },
    "Mohandas College of Engineering and Technology": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/mcet.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "50% placements"
    },
    " Musaliar College of Engineering ": {
        location: "Thiruvanthapuram, Kerala",
        image: "images/mce.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "70% placements"
    },
    "Muslim Association College of Engineering ": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/mace.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "63.45% placements"
    },
    "Muthoot Institute of Technology": {
        location: "Ernakulam, Kerala",
        image: "images/mt.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "72% placements"
    },
    "Sarabai Institute of Science and Technology": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/sis.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "58% placements"
    },
    "Saingits College of Engineering": {
        location: "kottayam, Kerala",
        image: "images/sce.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "58% placements"
    },
    "Sahrdaya College of Science and Technology": {
        location: "Thrissur, Kerala",
        image: "images/scst.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "48% placements"
    },
    "John Cox C S I Institute of  Technology": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/csi.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "58% placements"
    },
    "Jawaharlal College of Engineerning and Technology": {
        location: "Palakad, Kerala",
        image: "images/jce.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "62% placements"
    },
    "Ilahai College of Engineering and Technology": {
        location: "Ernakulam, Kerala",
        image: "images/ice.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "58% placements"
    },
    "IES College of Engineering": {
        location: "Thrissur, Kerala",
        image: "images/ies.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "44% placements"
    },
    "MGM College of Engineering  and Technology": {
        location: "Ernakulam, Kerala",
        image: "images/mgm.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "67% placements"
    },
    "Aryanet Institute of Technology": {
        location: "Palakad, Kerala",
        image: "images/ait.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "44% placements"
    },
    "Ammini College of Engineeering": {
        location: "Palakad, Kerala",
        image: "images/amm.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "48% placements"
    },
    "College of Engineering Muttathara": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/cem.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "58% placements"
    },
    "LBS College of Engineering": {
        location: "Kozhikode, Kerala",
        image: "images/lbs.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "76% placements"
    },
    "NSS College of Engineering": {
        location: "palakad, Kerala",
        image: "images/nss.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "78% placements"
    },
    "College of Engineering Attingal": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/cea.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Artificial Intelligence and Machine Learning"],
        placement: "60% placements"
    },
    "Rajagiri School of Engineering and Technology": {
        location: "Ernakulam, Kerala",
        image: "images/rse.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "58% placements"
    },
    "VISAT Engineering College": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/visat.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "68% placements"
    },
    "UKF College  of Engineering and Technology": {
        location: "Kollam, Kerala",
        image: "images/rse.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "55% placements"
    },
    "Trinity College of Engineering": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/tce.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "58% placements"
    },
    "Vidya Academy of Science and Technology": {
        location: "Thrissur, Kerala",
        image: "images/vast.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "61% placements"
    },
    "HERA College  of Engineering and Technology": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/hera.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "52% placements"
    },
    "Goverment Engineering College Barton Hill": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/bh.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "74% placements"
    },
    "Lourdes Matha College of Science and Technology": {
        location: "Thiruvananthapuram, Kerala",
        image: "images/lmc.jpg",
        courses: ["B.Tech Computer Science", "B.Tech Mechanical Engineering", "B.Tech Civil Engineering","B.Tech Electronics and Communication","B.Tech Electrical and Electronics","Information Technology"],
        placement: "48% placements"
    },

    
    
    



};

// Function to get college name from URL
function getCollegeNameFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("name");
}

// Function to load college details
function loadCollegeDetails() {
    const collegeName = getCollegeNameFromURL();

    if (!collegeName || !collegeData[collegeName]) {
        document.body.innerHTML = "<h2>College not found</h2><a href='index.html'>Go back</a>";
        return;
    }

    // Update page content
    document.getElementById("collegeName").textContent = collegeName;
    document.getElementById("collegeLocation").textContent = collegeData[collegeName].location;
    document.getElementById("collegeImage").src = collegeData[collegeName].image;
    document.getElementById("placementDetails").textContent = collegeData[collegeName].placement;

    // Populate course list
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = ""; // Clear previous content

    collegeData[collegeName].courses.forEach(course => {
        const li = document.createElement("li"); // Create a new list item
        li.textContent = course; // Set the text
        courseList.appendChild(li); // Add it to the list
    });
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", loadCollegeDetails);