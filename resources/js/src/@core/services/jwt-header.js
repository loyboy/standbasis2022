export default function jwtHeader() {
    let accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        return { Authorization: 'Bearer ' + accessToken }; // for Spring Boot back-end
    } else {
        return {};
    }
}