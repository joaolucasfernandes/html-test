const LIST = [
    {
        id: 1,
        nome: "Mestre Yoda",
        avatar: "Images/yoda.png"
    },
    {
        id: 2,
        nome: "Luke Skywalker",
        avatar: "Images/luke.png"
    },
    {
        id: 3,
        nome: "Leia",
        avatar: "Images/leia.png"
    },
    {
        id: 4,
        nome: "Han Solo",
        avatar: "Images/hansolo.png"
    },
    {
        id: 5,
        nome: "Darth Vader",
        avatar: "Images/vader.png"
    },
    {
        id: 6,
        nome: "Chewbacca",
        avatar: "Images/chewbacca.png"
    },
    {
        id: 7,
        nome: "R2D2",
        avatar: "Images/r2d2.png"
    },
    {
        id: 7,
        nome: "C3pO",
        avatar: "Images/c3po.png"
    }

]


const App = new Vue({
    el: "#app",
    data: {
        title: "Star wars Lego",
        userName: "Luciana",
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },
        search() {
            const list = this.characters
            const result = list.filter(item => {
                return item.nome == this.searchName
            })
            this.characters = result
        }
    }
})