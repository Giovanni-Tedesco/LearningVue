new Vue({
    el: '#exercise',


    data: {
        value: 0,
        timeout: 5000
    },

    computed: {

    	result: function() {

    		return this.value > 37 ? 'Bigger than 37' : 'Not there yet';

    	},

    },

    watch: {
    	value: function(value) {
    		var vm = this;

    		setTimeout(function() {
    			vm.value = 0;
    		}, vm.timeout);

    	},
    },



});