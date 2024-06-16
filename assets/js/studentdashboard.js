document.addEventListener('DOMContentLoaded', () => {
    const serviceForm = document.getElementById('serviceForm');
    const orderList = document.getElementById('orderList');

    serviceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const service = document.getElementById('service').value;
        addOrder(service);
        redirectToServicePage(service);
    });

    function addOrder(service) {
        const li = document.createElement('li');
        li.textContent = `${service} - ${getServicePrice(service)}`;
        orderList.appendChild(li);
    }

    function getServicePrice(service) {
        switch(service) {
            case 'cleaning':
                return '$20';
            case 'laundry':
                return '$15';
            default:
                return '$0';
        }
    }

    function redirectToServicePage(service) {
        let url = '';
        switch(service) {
            case 'cleaning':
                url = 'cleaningservice.html';
                break;
            case 'laundry':
                url = 'studentservice.html';
                break;
        }
        window.location.href = url;
    }
});