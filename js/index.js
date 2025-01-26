document.querySelectorAll('[data-bs-target="#contactModal"]').forEach(btn => {
    btn.addEventListener('click', function() {
        new bootstrap.Modal(document.getElementById('contactModal')).show();
    });
});

// Modal form submission
document.getElementById('modalContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Solicitação Enviada!',
        text: 'Em breve nossa equipe entrará em contacto.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
    bootstrap.Modal.getInstance(document.getElementById('contactModal')).hide();
});