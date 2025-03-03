(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()



  document.addEventListener("DOMContentLoaded", () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarCollapse.addEventListener('show.bs.collapse', () => {
        document.body.classList.add('navbar-expanded');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
        document.body.classList.remove('navbar-expanded');
    });
});
