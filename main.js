let campaignNames = [];

function generateCName() {
    const accountClient = document.getElementById('account-client').innerText;
    const campaignCandidate = document.getElementById('campaign-candidate').value;
    const state = document.getElementById('state').innerText.replace(/[A-Z][A-Z]\s+:\s/g, '');
    const office = document.getElementById('office').value;
    const aedmsSdems = document.getElementById('aedms-sdems').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const year = document.getElementById('year').value;

    const fullName = [
        accountClient,
        campaignCandidate,
        state,
        office,
        aedmsSdems,
        startDate,
        endDate,
        year
    ].filter(Boolean).join('_');

    if (fullName) {
        campaignNames.push(fullName);
    }

    displayNames();
    openModal();
}

function resetCForm() {
    let resetInputBox = 'Select your option';
    let resetState = 'Select State';

    document.getElementById('account-client').innerText= resetInputBox;
    document.getElementById('state').innerText = resetState;

    document.querySelectorAll('input').forEach(element => element.value = '');

    campaignNames = [];
}

function generateAdGroupName() {
    const accountClientAd = document.getElementById('account-client-ad').innerText;
    const campaignCandidateAd = document.getElementById('campaign-candidate-ad').value;
    const stateAd = document.getElementById('state-ad').innerText.replace(/[A-Z][A-Z]\s+:\s/g, '');
    const district = document.getElementById('district').value;
    const startDateAd = document.getElementById('start-date-ad').value;
    const endDateAd = document.getElementById('end-date-ad').value;
    const platform = document.getElementById('platform').innerText;
    const mediaType = document.getElementById('media-type').innerText;
    const cpm = document.getElementById('cpm').value;
    const targetingType = document.getElementById('targeting-type').innerText;
    const dataSource = document.getElementById('data-source').innerText;
    const audience = document.getElementById('audience').value;

    const fullAdGroupName = [
        accountClientAd,
        campaignCandidateAd,
        stateAd,
        district,
        startDateAd,
        endDateAd,
        platform,
        mediaType,
        cpm,
        targetingType,
        dataSource,
        audience
    ].filter(Boolean).join('_');

    if (fullAdGroupName) {
        campaignNames.push(fullAdGroupName);
    }

    displayNames();
    openModal();
}

function resetAdForm() {
    let resetInputBox = 'Select your option';
    let resetState = 'Select State';

    document.getElementById('account-client-ad').innerText = resetInputBox;
    document.getElementById('state-ad').innerText = resetState;
    document.getElementById('platform').innerText= resetInputBox;
    document.getElementById('media-type').innerText= resetInputBox;
    document.getElementById('targeting-type').innerText= resetInputBox;
    document.getElementById('data-source').innerText= resetInputBox;

    document.querySelectorAll('input').forEach(element => element.value = '');

    campaignNames = [];
}

const optionMenu = document.querySelectorAll(".select-menu");

optionMenu.forEach(optionMenu => {

    const selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

    options.forEach(option =>{
        option.addEventListener("click", ()=>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenu.classList.remove("active");
        });
    });
});

function displayNames() {
    const nameList = document.getElementById('name-list');
    nameList.innerHTML = '';
    campaignNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function openModal() {
    document.getElementById('name-list-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('name-list-modal').style.display = 'none';
    campaignNames = [];
}
