var life = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      dob: null,
      error: false,
      sleep: 320,
      showModal: true
    },
    beforeMount(){
      this.dob = localStorage.getItem('DOB');

      if(this.dob != null){
        this.showModal = false;
      }
    },
    computed: {
      max: function(){
        var fulldate = new Date();
        return fulldate.toISOString();
      },
      today: function(){
        var fulldate = new Date();
        return fulldate.toISOString().split('T')[0];
      },
      progress: function(){
        var oneMonth = 30.4 * 24 * 60 * 60 * 1000;
        var start = new Date(this.dob.split('-')[0], this.dob.split('-')[1], this.dob.split('-')[2],);
        var end = new Date(this.today.split('-')[0], this.today.split('-')[1], this.today.split('-')[2],);
        return Math.round(Math.abs((end - start) / oneMonth));
      }
    },
    methods: {
      save: function(){
        if (this.dob == null){
          this.showModal = true;
          this.error = true;
        } else {
          localStorage.setItem('DOB', this.dob);
          this.showModal = false;
        }
      }
    }
  }
)
