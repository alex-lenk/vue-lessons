const h = Vue.h

const App = Vue.createApp({
    data() {
        return {
            title: 'Hello',
            title2: 'Hello'
        }
    },
    methods: {
        changeTitle() {
            console.log(this)
            this.title = 'Изменненый текст'
        }
    },
    /*    template: `
        <div class="card mb-5">
            <h1>{{ title }}</h1>
            <button class="btn primary" @click="title = 'Изменненый текст'">Change text</button>
        </div>
        `*/
    render() {
        return h(
            'div', {
                class: 'card'
            }, [
                h(
                    'h1',
                    {},
                    this.title
                ),
                h(
                    'button',
                    {
                        class: 'btn primary',
                        onClick: this.changeTitle
                    },
                    'Change text'
                )
            ]
        )
    }
});

App.mount('#app')

let title = 'Vue js 3',
    message = 'Учу: ' + title

/*
console.log(message)

title = 'Angelar'

console.log(message)
*/
/*
const data = {
    title: 'Vue js 3',
    message: 'Учу: '
}
console.log(data)

const proxy = new Proxy(data, {
    get(target, p) {
        console.log(target)
        console.log(p)
    }
})
console.log(proxy)

proxy.message
*/

const person = {
    name: 'Alex',
    age: 34,
    work: 'developer'
}

const objectProxy = new Proxy(person, {
    get(target, prop) {
        return target[prop]
    }
})
