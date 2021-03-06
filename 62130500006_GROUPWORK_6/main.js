const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    nickname: {
        presence: true, 
},
    age: {
    presence: true,
    numericality: {
        lessThan: 150
    }
},
}

const app =Vue.createApp({
    data() {
        return {
            pic: "images/profile image.jpg",
            firstname: null,
            lastname: null,
            nickname: null,
            age: null,
            fname: null,
            lname: null,
            nname: null,
            a: null,
            errors: null,
            aaa: [{cat:1}, {cat:2}, {dog:3}]
        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({firstname: this.fname,
                                    lastname: this.lname,
                                    nickname: this.nname,
                                    age: this.a,},
                                    constraints)
            if(this.errors){
                e.preventDefault();
            }
            if(!this.errors){
                alert("Registered successfully.")
            }
        },
        inputVale(){
            if(this.fname && this.lname && this.lname && this.nname && this.a){
            this.firstname = this.fname;
            this.lastname = this.lname;
            this.nickname = this.nname;
            this.age = this.a;
        }
        },
        checkError(index){
            for(var i = 0 ; i<errors.length ; i++){
                if(index == firstname){
                    return errors.firstname
                }
                if(index == lastname){
                    return errors.lastname
                }
                if(index == nickname){
                    return errors.nickname
                }
                if(index == age){
                    return errors.firstname
                }
            }
        }
    }
})

mountedApp = app.mount('#app')