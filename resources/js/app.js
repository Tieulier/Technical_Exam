/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

var btn=document.getElementById("btn").addEventListener("click",getPost);
var con=0;
var div=document.getElementById("cardDiv");
function getPost() {
	fetch('https://jsonplaceholder.typicode.com/photos')

	.then((res)=>{
		return res.json();
	})

	.then((post)=>{
		for(let index = 0; index < 1; index++){
			div.innerHTML+=`
				<div class="card col-3 m-1 mx-auto">
					<img class="card-img-top" src="${post[con].thumbnailUrl}">
					<div class="card-body">
						<h5 class="card-title">${post[con].id}</h5>
						<p class="card-text">${post[con].title}</p>
					</div>
				</div>
			`
			con=con+1;
		}
	})
	.catch((error)=>{
		console.log(error);
	})
}
