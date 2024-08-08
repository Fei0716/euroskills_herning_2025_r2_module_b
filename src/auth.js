import {reactive} from 'vue';
const auth  = reactive({
    email: localStorage.getItem('email')||null,
    isLogin(){
        return this.email !== null;
    },
    login(email){
        this.email = email;
        localStorage.setItem('email',email);
    },
    logout(){
        this.email = null;
        localStorage.removeItem('email');
    }
});

export default auth;