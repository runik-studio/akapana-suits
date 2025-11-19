const navbarHTML = `
<nav class="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Left side: Links on desktop, hamburger on mobile -->
            <div class="flex-1 flex justify-start relative">
                <!-- Desktop Links -->
                <div class="hidden md:flex items-center space-x-1 lg:space-x-4">
                    <a href="index.html" class="text-gray-700 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                    <a href="about.html" class="text-gray-700 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Sobre Nosotros</a>
                    <a href="cabin.html" class="text-gray-700 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Cabañas</a>
                </div>
                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gold focus:outline-none">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Centered Logo -->
            <div class="absolute left-1/2 transform -translate-x-1/2">
                <a href="index.html"><img src="assets/logo_akapana.webp" alt="logo" class="w-32"></a>
            </div>

            <!-- Right side: Links and button -->
            <div class="flex-1 flex justify-end">
                <!-- Desktop Links -->
                <div class="hidden md:flex items-center space-x-1 lg:space-x-4">
                    <a href="experiencia-360.html" class="text-gray-700 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Experiencia 360</a>
                    <a href="contact.html" class="text-gray-700 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
                    <button id="reservarBtnNav" class="bg-gold text-black font-bold text-sm py-2 px-4 rounded-lg shadow-md hover:bg-yellow-300 transition-all duration-300 ease-in-out flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span>Reservar Ahora</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Menú Desplegable para Móviles -->
    <div id="mobile-menu" class="md:hidden hidden">
        <a href="index.html" class="block text-gray-700 hover:text-gold px-4 py-2 text-sm font-medium">Inicio</a>
        <a href="about.html" class="block text-gray-700 hover:text-gold px-4 py-2 text-sm font-medium">Sobre Nosotros</a>
        <a href="cabin.html" class="block text-gray-700 hover:text-gold px-4 py-2 text-sm font-medium">Cabañas</a>
        <a href="experiencia-360.html" class="block text-gray-700 hover:text-gold px-4 py-2 text-sm font-medium">Experiencia 360</a>
        <a href="contact.html" class="block text-gray-700 hover:text-gold px-4 py-2 text-sm font-medium">Contacto</a>
        <div class="px-4 py-2">
            <button id="reservarBtnNavMobile" class="w-full bg-gold text-black font-bold text-sm py-2 px-4 rounded-lg shadow-md hover:bg-yellow-300 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <span>Reservar Ahora</span>
            </button>
        </div>
    </div>
</nav>
`;

const modalHTML = `
<div id="reservaModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
    <div class="bg-white text-gray-900 rounded-xl shadow-2xl w-full max-w-md m-4 p-8 relative">
        <!-- Botón de Cerrar -->
        <button id="closeModalBtn" class="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-bold">&times;</button>
        
        <h2 class="text-3xl font-bold text-gold mb-6">Reservar Estadia</h2>
        
        <form id="bookingForm">

            <!-- Mensaje de Error General -->
            <div id="bookingError" class="hidden text-red-600 text-sm text-center mb-4"></div>

            <!-- Step 1: Selección de Fechas -->
            <div id="step1">
                <div class="mb-4">
                    <label for="fecha" class="block text-sm font-medium text-gray-700 mb-1">Fecha de Ingreso</label>
                    <!-- Cambiado de type="date" a type="text" para flatpickr -->
                    <input type="text" id="fecha" name="fecha" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold" required placeholder="DD/MM/YYYY">
                </div>
                <div class="mb-6">
                    <label for="fechaFin" class="block text-sm font-medium text-gray-700 mb-1">Fecha de Egreso</label>
                    <!-- Cambiado de type="date" a type="text" para flatpickr -->
                    <input type="text" id="fechaFin" name="fechaFin" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold" required placeholder="DD/MM/YYYY">
                </div>
                <div>
                    <button type="button" id="buscarDisponibilidadBtn" class="w-full bg-gold text-black font-bold text-lg py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors">
                        Buscar Disponibilidad
                    </button>
                </div>
            </div>

            <!-- Step 2: Selección de Cabaña (Oculto) -->
            <div id="step2" class="hidden">
                <label class="block text-sm font-medium text-gray-700 mb-2">Cabañas Disponibles (Total <span id="totalNoches" class="font-bold"></span> noches)</label>
                
                <div id="cabanaOptionsContainer" class="space-y-3 mb-6">
                    <!-- Opción 1 -->
                    <div class="cabana-option p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gold" data-cabana-name="Suite (2 personas)" data-cabana-price="55000">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">Suite (2 personas)</span>
                            <span class="text-lg font-bold text-gray-900" id="priceSuite"></span>
                        </div>
                    </div>
                    <!-- Opción 2 -->
                    <div class="cabana-option p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gold" data-cabana-name="Cabaña Mediana (4 personas)" data-cabana-price="80000">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">Cabaña Mediana (4 personas)</span>
                            <span class="text-lg font-bold text-gray-900" id="priceMediana"></span>
                        </div>
                    </div>
                    <!-- Opción 3 -->
                    <div class="cabana-option p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gold" data-cabana-name="Cabaña Grande (6 personas)" data-cabana-price="105000">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">Cabaña Grande (6 personas)</span>
                            <span class="text-lg font-bold text-gray-900" id="priceGrande"></span>
                        </div>
                    </div>
                </div>
                
                <button type="button" id="reservarFinalBtn" class="w-full bg-gold text-black font-bold text-lg py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors">
                    Solicitar Reserva
                </button>
            </div>

        </form>

        <!-- Información Adicional -->
        <div id="infoAdicional" class="mt-6 text-xs text-gray-600 border-t pt-4">
            <p class="text-sm font-bold text-gray-800 mb-2">Información Importante:</p>
            <ul class="list-disc list-inside space-y-1">
                <li>Check In: 13:00 PM - 22:00 PM</li>
                <li>Check Out: hasta 10:00 AM</li>
                <li>Impuestos incluidos.</li>
                <li>No es pet friendly.</li>
            </ul>
            <p class="text-center font-bold text-sm text-blue-600 mt-4">
                Reserva Directo - Precio mas bajo garantizado
            </p>
        </div>

        <!-- Mensaje de Éxito -->
        <div id="successMessage" class="hidden mt-6 text-center">
            <h3 class="text-green-600 font-bold text-xl">¡Solicitud Recibida!</h3>
            <p class="text-gray-700 text-sm mt-4">Nos pondremos en contacto a la brevedad para confirmar.</p>
        </div>
    </div>
</div>
`;

function initSharedUI() {
    // Inject Navbar
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Inject Modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-gold');
            link.classList.remove('text-gray-700');
        }
    });

    // --- Logic from index.html ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const modal = document.getElementById('reservaModal');
    // Buttons that might exist on the page
    const reservarBtn = document.getElementById('reservarBtn');
    const reservarBtnHero = document.getElementById('reservarBtnHero');
    const reservarBtnNav = document.getElementById('reservarBtnNav');
    const reservarBtnNavMobile = document.getElementById('reservarBtnNavMobile');
    // Nuevos botones de about.html
    const consultarFechasBtn = document.getElementById('consultarFechasBtn');
    const reservarBtnFooter = document.getElementById('reservarBtnFooter');

    const closeModalBtn = document.getElementById('closeModalBtn');

    // Elementos del formulario
    const bookingForm = document.getElementById('bookingForm');
    const bookingError = document.getElementById('bookingError');
    const infoAdicional = document.getElementById('infoAdicional');
    const successMessage = document.getElementById('successMessage');

    // --- Step 1 ---
    const step1 = document.getElementById('step1');
    const fechaInput = document.getElementById('fecha');
    const fechaFinInput = document.getElementById('fechaFin');
    const buscarDisponibilidadBtn = document.getElementById('buscarDisponibilidadBtn');

    // --- Step 2 ---
    const step2 = document.getElementById('step2');
    const totalNochesSpan = document.getElementById('totalNoches');
    const cabanaOptionsContainer = document.getElementById('cabanaOptionsContainer');
    const cabanaOptions = document.querySelectorAll('.cabana-option');
    const priceSuite = document.getElementById('priceSuite');
    const priceMediana = document.getElementById('priceMediana');
    const priceGrande = document.getElementById('priceGrande');
    const reservarFinalBtn = document.getElementById('reservarFinalBtn');

    // --- Estado de la Reserva ---
    let selectedCabana = null;
    let calculatedNights = 0;
    const prices = {
        "Suite (2 personas)": 55000,
        "Cabaña Mediana (4 personas)": 80000,
        "Cabaña Grande (6 personas)": 105000
    };

    // --- Lógica de Fecha (con Flatpickr) ---

    // Instancias de Flatpickr
    let fpIngreso = null;
    let fpEgreso = null;

    // Calcular mañana
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Configuración base
    const flatpickrConfig = {
        dateFormat: "d/m/Y", // Formato DD/MM/YYYY
        minDate: "today",
        locale: "es", // Usar el locale español
    };

    // Inicializar picker de Ingreso
    fpIngreso = flatpickr("#fecha", {
        ...flatpickrConfig,
        defaultDate: "today",
        onChange: function (selectedDates, dateStr, instance) {
            // Cuando cambia la fecha de ingreso, setear el min de la fecha de egreso
            if (selectedDates[0]) {
                let minEgreso = new Date(selectedDates[0]);
                minEgreso.setDate(minEgreso.getDate() + 1);
                fpEgreso.set('minDate', minEgreso);

                // Si la fecha de egreso actual es inválida, actualizarla
                if (fpEgreso.selectedDates.length > 0 && fpEgreso.selectedDates[0] <= selectedDates[0]) {
                    fpEgreso.setDate(minEgreso, true);
                }
            }
        }
    });

    // Inicializar picker de Egreso
    fpEgreso = flatpickr("#fechaFin", {
        ...flatpickrConfig,
        defaultDate: tomorrow,
        minDate: tomorrow // El minDate inicial ya es mañana
    });


    // --- Lógica de Modal ---
    const resetModal = () => {
        // Resetear estado
        selectedCabana = null;
        calculatedNights = 0;

        // Resetear UI
        bookingError.classList.add('hidden');
        successMessage.classList.add('hidden');

        step2.classList.add('hidden');
        step1.classList.remove('hidden');

        bookingForm.style.display = 'block';
        infoAdicional.style.display = 'block';

        cabanaOptions.forEach(option => {
            option.classList.remove('border-gold');
            option.classList.add('border-gray-300');
        });

        // Resetear flatpickr
        fpIngreso.clear();
        fpIngreso.set('minDate', 'today');
        fpIngreso.setDate('today');

        let tomorrowReset = new Date();
        tomorrowReset.setDate(tomorrowReset.getDate() + 1);
        fpEgreso.clear();
        fpEgreso.set('minDate', tomorrowReset);
        fpEgreso.setDate(tomorrowReset);
    };

    const openModal = () => {
        resetModal(); // Siempre resetear al abrir
        modal.classList.remove('hidden');
    };

    const closeModal = () => modal.classList.add('hidden');

    if (reservarBtn) reservarBtn.addEventListener('click', openModal);
    if (reservarBtnHero) reservarBtnHero.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    if (reservarBtnNav) reservarBtnNav.addEventListener('click', openModal);
    if (reservarBtnNavMobile) reservarBtnNavMobile.addEventListener('click', openModal);
    if (consultarFechasBtn) consultarFechasBtn.addEventListener('click', openModal);
    if (reservarBtnFooter) reservarBtnFooter.addEventListener('click', openModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- Lógica de Formulario ---

    // Step 1: Buscar Disponibilidad (Cálculo de precios)
    buscarDisponibilidadBtn.addEventListener('click', () => {
        bookingError.classList.add('hidden');

        // Obtener fechas de flatpickr
        const fechaStr = fechaInput.value;
        const fechaFinStr = fechaFinInput.value;

        if (!fechaStr || !fechaFinStr) {
            bookingError.textContent = 'Por favor, complete ambas fechas.';
            bookingError.classList.remove('hidden');
            return;
        }

        // Convertir fechas DD/MM/YYYY a objetos Date para comparar
        const parseDate = (str) => {
            const parts = str.split('/');
            // new Date(año, mes - 1, dia)
            return new Date(parts[2], parts[1] - 1, parts[0]);
        };

        const date1 = parseDate(fechaStr);
        const date2 = parseDate(fechaFinStr);

        if (date2 <= date1) {
            bookingError.textContent = 'La fecha de egreso debe ser posterior a la de ingreso.';
            bookingError.classList.remove('hidden');
            return;
        }

        // Cálculo de noches
        const diffTime = Math.abs(date2 - date1);
        calculatedNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        totalNochesSpan.textContent = calculatedNights;

        // Calcular y mostrar precios
        priceSuite.textContent = `ARS $${(prices["Suite (2 personas)"] * calculatedNights).toLocaleString('es-AR')}`;
        priceMediana.textContent = `ARS $${(prices["Cabaña Mediana (4 personas)"] * calculatedNights).toLocaleString('es-AR')}`;
        priceGrande.textContent = `ARS $${(prices["Cabaña Grande (6 personas)"] * calculatedNights).toLocaleString('es-AR')}`;

        // Avanzar al Step 2
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    });

    // Step 2: Selección de Cabaña
    cabanaOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Resetear estilos
            cabanaOptions.forEach(opt => {
                opt.classList.remove('border-gold', 'bg-yellow-50');
                opt.classList.add('border-gray-300');
            });

            // Aplicar estilo seleccionado
            option.classList.add('border-gold', 'bg-yellow-50');
            option.classList.remove('border-gray-300');

            // Guardar selección
            selectedCabana = {
                name: option.dataset.cabanaName,
                pricePerNight: option.dataset.cabanaPrice,
                totalPrice: prices[option.dataset.cabanaName] * calculatedNights
            };
        });
    });

    // Step 2: Botón Final de Reserva
    reservarFinalBtn.addEventListener('click', () => {
        bookingError.classList.add('hidden');

        if (!selectedCabana) {
            bookingError.textContent = 'Por favor, seleccione un tipo de cabaña.';
            bookingError.classList.remove('hidden');
            return;
        }

        // Log de la reserva (simulación)
        console.log('Reserva final solicitada:', {
            fecha_ingreso: fechaInput.value, // Formato DD/MM/YYYY
            fecha_egreso: fechaFinInput.value, // Formato DD/MM/YYYY
            noches: calculatedNights,
            cabana: selectedCabana.name,
            precio_total: selectedCabana.totalPrice
        });

        // Mostrar mensaje de éxito
        bookingForm.style.display = 'none';
        infoAdicional.style.display = 'none';
        successMessage.classList.remove('hidden');
    });
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initSharedUI };
} else {
    // Browser environment
    window.initSharedUI = initSharedUI;
}
