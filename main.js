//MATRIZ
let campus = {
    trainers:{
        nombre:[],
        telefono:[],
        email:[],
        sede:{
            ciudad:[],
            direccion:[],
            telefono:[]
        },
        team:{
            numeroTeam:[],
            horarioTeam:{
                dia:{
                    lunes:{
                        hora:[],
                        salon:{
                            numero:[],
                            piso:[]
                        }
                    },
                    martes:{
                        hora:[],
                        salon:{
                            numero:[],
                            piso:[]
                        }
                    },
                    miercoles:{
                        hora:[],
                        salon:{
                            numero:[],
                            piso:[]
                        }
                    },
                    jueves:{
                        hora:[],
                        salon:{
                            numero:[],
                            piso:[]
                        }
                    },
                    viernes:{
                        hora:[],
                        salon:{
                            numero:[],
                            piso:[]
                        }
                    }
                }
            }
        },
        tecnologia:{
            pertenece:[],
            tipo:[]
        }
    },
    campers: {
        nombre:[],
        telefono:[],
        email:[],
        direccion:{
            direccion:[],
            barrio:[],
            medioTransporte:[]
        },
        sede:{
            ciudad:[],
            direccion:[],
            telefono:[]
        },
        team:{
            numeroTeam:[],
            horarioTeam:{
                dia:{
                    lunes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    martes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    miercoles:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    jueves:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    viernes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    }
                }
            },
            horarioIngles:{
                dia:{
                    lunes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    martes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    miercoles:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    jueves:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    viernes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    }
                }
            },
            horarioSer:{
                dia:{
                    lunes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    martes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    miercoles:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    jueves:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    },
                    viernes:{
                        hora:[],
                        salon:{
                            nombreSalon:[],
                            numero:[],
                            piso:[]
                        }
                    }
                }
            }
        },
        nivel:{
            nivelActual:[],
            preRequisito:[],
            tecnologia:{
                pertenece:[],
                tipo:[],
            },
            roadMap:{
                numeroCreditos:[],
                año:[],
                numeroAsignaturas:[]
            }
        }
    },
    sedes:{
        ciudad:[],
        direccion:[],
        telefono:[]
    },
    niveles:{
        nombre:[],
        prerrequisto:[],
        tecnologia:{
            pertenece:[],
            tipo:[]
        }
    },
    tecnologias:{
        nombre:[],
        tipo:[],
        modalidad:[],
        sandbox:[]
    },
    // "PseInt", "Python", "C#", "Boostrap", "HTML", "CSS", "git", "javascript", "typescript", "MySQL", "node.js", "Laravel", "vue.js", "react.js", "angular.js", "mongoDB", "SQLServer", ".net", "django", "nest"
    teams:{
        numero:[],
        horario:{
            dia:{
                lunes:{
                    hora:[],
                    salon:{
                        numero:[],
                        piso:[]
                    }
                },
                martes:{
                    hora:[],
                    salon:{
                        numero:[],
                        piso:[]
                    }
                },
                miercoles:{
                    hora:[],
                    salon:{
                        numero:[],
                        piso:[]
                    }
                },
                jueves:{
                    hora:[],
                    salon:{
                        numero:[],
                        piso:[]
                    }
                },
                viernes:{
                    hora:[],
                    salon:{
                        numero:[],
                        piso:[]
                    }
                }
            }
        }
    },
    roadMap:{
        nombre:[],
        creditos:[],
        año:[],
        asignaturas:[]
    },
    }

//MATRIZ

//SECCIÓN DE SELECCIÓN
const firstForm = document.querySelector('.firstForm');
const tipoP = document.querySelector('#tipoP');
const primerPaso = document.querySelector(".primerPaso")
const añadir = document.querySelector('#añadir');
const sedesSection = document.querySelector('.sedesSection');
const nivelesSection = document.querySelector('.nivelesSection');
const tecnologiasSection = document.querySelector('.tecnologiasSection');
const teamsSection = document.querySelector('.teamsSection');
const roadMapSection = document.querySelector('.roadMapSection');

tipoP.addEventListener('change', (e) => {
    e.preventDefault();
    let valorOption = tipoP.value;
    if (valorOption === "camper"){
        contactoCampers.style.display = "block";
        primerPaso.style.display = "none";
    }else if (valorOption === "trainer"){
        contactoTrainers.style.display = "block";
        primerPaso.style.display = "none";
    }
})

añadir.addEventListener('change', (e) => {
    e.preventDefault();
    let valorOption = añadir.value;
    if (valorOption === "sedes"){
        sedesSection.style.display = "block";
        primerPaso.style.display = "none";
    }else if (valorOption === "niveles"){
        nivelesSection.style.display = "block";
        primerPaso.style.display = "none";
    }else if (valorOption === "tecnologias"){
        tecnologiasSection.style.display = "block";
        primerPaso.style.display = "none";
    }else if (valorOption === "teams"){
        teamsSection.style.display = "block";
        primerPaso.style.display = "none";
    }else if (valorOption === "roadMap"){
        roadMapSection.style.display = "block";
        primerPaso.style.display = "none";
    }
})
//SECCIÓN DE SELECCIÓN

//CAMPERS
const contactoCampers = document.querySelector('.contactoCampers');
const campusCampers = document.querySelector('.campusCampers');
const nivelesCampers = document.querySelector('.nivelesCampers');
const formCampers = document.querySelector('#formCampers');
//BOTONES
const next1 = document.querySelector('.next1');
const previous1 = document.querySelector('.previous1');

const next2 = document.querySelector('.next2');
const previous2 = document.querySelector('.previous2');

const enviar = document.querySelector('.enviar');
const previous3 = document.querySelector('.previous3');

const clases = document.querySelector("#clases");
const softwareSkills = document.querySelector(".softwareSkills");
const claseIngles = document.querySelector(".claseIngles");
const claseSer = document.querySelector(".claseSer");
const ninguna = document.querySelector(".ninguna");

//BOTONES
//Botón primera sección campers
next1.addEventListener("click", (e) => {
    e.preventDefault();
    contactoCampers.style.display = "none";
    campusCampers.style.display = "block";
})
previous1.addEventListener("click", (e) => {
    e.preventDefault();
    contactoCampers.style.display = "none";
    primerPaso.style.display = "block";
})
//Botón primera seccion campers
//Botón segunda sección campers
next2.addEventListener("click", (e) => {
    e.preventDefault();
    campusCampers.style.display = "none";
    nivelesCampers.style.display = "block";
})
previous2.addEventListener("click", (e) => {
    e.preventDefault();
    campusCampers.style.display = "none";
    contactoCampers.style.display = "block";
});

const diasC = document.querySelector(".diasC");
const lunesC = document.querySelector(".lunesC");
const martesC = document.querySelector(".martesC");
const miercolesC = document.querySelector(".miercolesC");
const juevesC = document.querySelector(".juevesC");
const viernesC = document.querySelector(".viernesC");

const diasIC = document.querySelector(".diasIC");
const lunesIC = document.querySelector(".lunesIC");
const martesIC = document.querySelector(".martesIC");
const miercolesIC = document.querySelector(".miercolesIC");
const juevesIC = document.querySelector(".juevesIC");
const viernesIC = document.querySelector(".viernesIC");

const diasSC = document.querySelector(".diasSC");
const lunesSC = document.querySelector(".lunesSC");
const martesSC = document.querySelector(".martesSC");
const miercolesSC = document.querySelector(".miercolesSC");
const juevesSC = document.querySelector(".juevesSC");
const viernesSC = document.querySelector(".viernesSC");

clases.addEventListener("change", (e) => {
    e.preventDefault();
    let valorOptionC = clases.value;
    if (valorOptionC === "skills"){
        diasC.style.display = "block";
        diasIC.style.display = "none";
        diasSC.style.display = "none";
    }else if (valorOptionC === "ingles"){
        diasIC.style.display = "block";
        diasC.style.display = "none";
        diasSC.style.display = "none";
    }else if (valorOptionC === "ser"){
        diasSC.style.display = "block";
        diasC.style.display = "none";
        diasIC.style.display = "none";
    }else diasIC.style.display = "none";

})

diasC.addEventListener("change", (e) => {
    e.preventDefault();
    let valorOptionDC = diasC.value;
    if (valorOptionDC === "lunes"){
        softwareSkills.style.display = "block";
        lunesC.style.display = "block";
        martesC.style.display = "none";
        miercolesC.style.display = "none";
        juevesC.style.display = "none";
        viernesC.style.display = "none";
    }else if (valorOptionDC === "martes"){
        martesC.style.display = "block";
        lunesC.style.display = "none";
        miercolesC.style.display = "none";
        juevesC.style.display = "none";
        viernesC.style.display = "none";
    }else if (valorOptionDC === "miercoles"){
        miercolesC.style.display = "block";
        martesC.style.display = "none";
        juevesC.style.display = "none";
        viernesC.style.display = "none";
        lunesC.style.display = "none";
    }else if (valorOptionDC === "jueves"){
        juevesC.style.display = "block";
        miercolesC.style.display = "none";
        martesC.style.display = "none";
        viernesC.style.display = "none";
        lunesC.style.display = "none";
    }else if (valorOptionDC === "viernes"){
        viernesC.style.display = "block";
        juevesC.style.display = "none";
        miercolesC.style.display = "none";
        martesC.style.display = "none";
        lunesC.style.display = "none";
    }
    else{
        softwareSkills.style.display = "none";
        // lunesC.style.display = "none";
    }
})

diasIC.addEventListener("change", (e) => {
    e.preventDefault();
    let valorOptionDC = diasIC.value;
    if (valorOptionDC === "lunes"){
        claseIngles.style.display = "block";
        lunesIC.style.display = "block";
        martesIC.style.display = "none";
        miercolesIC.style.display = "none";
        juevesIC.style.display = "none";
        viernesIC.style.display = "none";
    }else if (valorOptionDC === "martes"){
        martesIC.style.display = "block";
        lunesIC.style.display = "none";
        miercolesIC.style.display = "none";
        juevesIC.style.display = "none";
        viernesIC.style.display = "none";
    }else if (valorOptionDC === "miercoles"){
        miercolesIC.style.display = "block";
        martesIC.style.display = "none";
        juevesIC.style.display = "none";
        viernesIC.style.display = "none";
        lunesIC.style.display = "none";
    }else if (valorOptionDC === "jueves"){
        juevesIC.style.display = "block";
        miercolesIC.style.display = "none";
        martesIC.style.display = "none";
        viernesIC.style.display = "none";
        lunesIC.style.display = "none";
    }else if (valorOptionDC === "viernes"){
        viernesIC.style.display = "block";
        juevesIC.style.display = "none";
        miercolesIC.style.display = "none";
        martesIC.style.display = "none";
        lunesIC.style.display = "none";
    }
    else{
        claseIngles.style.display = "none";
        // lunesC.style.display = "none";
    }
})

diasSC.addEventListener("change", (e) => {
    e.preventDefault();
    let valorOptionDC = diasC.value;
    if (valorOptionDC === "lunes"){
        claseSer.style.display = "block";
        lunesSC.style.display = "block";
        martesSC.style.display = "none";
        miercolesSC.style.display = "none";
        juevesSC.style.display = "none";
        viernesSC.style.display = "none";
    }else if (valorOptionDC === "martes"){
        martesSC.style.display = "block";
        lunesSC.style.display = "none";
        miercolesSC.style.display = "none";
        juevesSC.style.display = "none";
        viernesSC.style.display = "none";
    }else if (valorOptionDC === "miercoles"){
        miercolesSC.style.display = "block";
        martesSC.style.display = "none";
        juevesSC.style.display = "none";
        viernesSC.style.display = "none";
        lunesSC.style.display = "none";
    }else if (valorOptionDC === "jueves"){
        juevesSC.style.display = "block";
        miercolesSC.style.display = "none";
        martesSC.style.display = "none";
        viernesSC.style.display = "none";
        lunesSC.style.display = "none";
    }else if (valorOptionDC === "viernes"){
        viernesSC.style.display = "block";
        juevesSC.style.display = "none";
        miercolesSC.style.display = "none";
        martesSC.style.display = "none";
        lunesSC.style.display = "none";
    }
    else{
        claseSer.style.display = "none";
        // lunesC.style.display = "none";
    }
})

//Botón segunda sección campers
//Botón tercera sección campers
previous3.addEventListener("click", (e) => {
    e.preventDefault();
    nivelesCampers.style.display = "none";
    campusCampers.style.display = "block";
})
//Botón tercera sección campers

//LLENAR DATOS:

enviar.addEventListener('click', function(e){
    e.preventDefault();
    //INPUTS:
    //primera sección
    const nombreCamper = document.querySelector('.nombreInput').value;
    const telefonoCamper = document.querySelector('.telefonoInput').value;
    const emailCamper = document.querySelector('.emailInput').value;
    const direccionCamper = document.querySelector('.direccionInput').value;
    const barrioCamper = document.querySelector('.barrioInput').value;
    const transporteCamper = document.querySelector('.transporteInput').value;
    //primera sección
    //segunda sección
    const teamCamper = document.querySelector('.teamInput').value;
    const ciudadSedeC = document.querySelector('.ciudadSedeC').value;
    const direccionSedeC = document.querySelector('.direccionSedeC').value;
    const telefonoSedeC = document.querySelector('.telefonoSedeC').value;

    const horaLunesC = document.querySelector('.horaLunesTeamC').value;
    const salonLunesC = document.querySelector('.nombreSalonLunesTeamC').value;
    const numeroSalonLunesC = document.querySelector('.numeroSalonLunesTeamC').value;
    const pisoLunesC = document.querySelector('.pisoSalonLunesTeamC').value;

    const horaMartesC = document.querySelector('.horaMartesTeamC').value;
    const salonMartesC = document.querySelector('.nombreSalonMartesTeamC').value;
    const numeroSalonMartesC = document.querySelector('.numeroSalonMartesTeamC').value;
    const pisoMartesC = document.querySelector('.pisoSalonMartesTeamC').value;

    const horaMiercolesC = document.querySelector('.horaMiercolesTeamC').value;
    const salonMiercolesC = document.querySelector('.nombreSalonMiercolesTeamC').value;
    const numeroSalonMiercolesC = document.querySelector('.numeroSalonMiercolesTeamC').value;
    const pisoMiercolesC = document.querySelector('.pisoSalonMiercolesTeamC').value;

    const horaJuevesC = document.querySelector('.horaJuevesTeamC').value;
    const salonJuevesC = document.querySelector('.nombreSalonJuevesTeamC').value;
    const numeroSalonJuevesC = document.querySelector('.numeroSalonJuevesTeamC').value;
    const pisoJuevesC = document.querySelector('.pisoSalonJuevesTeamC').value;

    const horaViernesC = document.querySelector('.horaViernesTeamC').value;
    const salonViernesC = document.querySelector('.nombreSalonViernesTeamC').value;
    const numeroSalonViernesC = document.querySelector('.numeroSalonViernesTeamC').value;
    const pisoViernesC = document.querySelector('.pisoSalonViernesTeamC').value;

    //INGLES

    const horaLunesIC = document.querySelector('.horaLunesTeamIC').value;
    const salonLunesIC = document.querySelector('.nombreSalonLunesTeamIC').value;
    const numeroSalonLunesIC = document.querySelector('.numeroSalonLunesTeamIC').value;
    const pisoLunesIC = document.querySelector('.pisoSalonLunesTeamIC').value;

    const horaMartesIC = document.querySelector('.horaMartesTeamIC').value;
    const salonMartesIC = document.querySelector('.nombreSalonMartesTeamIC').value;
    const numeroSalonMartesIC = document.querySelector('.numeroSalonMartesTeamIC').value;
    const pisoMartesIC = document.querySelector('.pisoSalonMartesTeamIC').value;

    const horaMiercolesIC = document.querySelector('.horaMiercolesTeamIC').value;
    const salonMiercolesIC = document.querySelector('.nombreSalonMiercolesTeamIC').value;
    const numeroSalonMiercolesIC = document.querySelector('.numeroSalonMiercolesTeamIC').value;
    const pisoMiercolesIC = document.querySelector('.pisoSalonMiercolesTeamIC').value;

    const horaJuevesIC = document.querySelector('.horaJuevesTeamIC').value;
    const salonJuevesIC = document.querySelector('.nombreSalonJuevesTeamIC').value;
    const numeroSalonJuevesIC = document.querySelector('.numeroSalonJuevesTeamIC').value;
    const pisoJuevesIC = document.querySelector('.pisoSalonJuevesTeamIC').value;

    const horaViernesIC = document.querySelector('.horaViernesTeamIC').value;
    const salonViernesIC = document.querySelector('.nombreSalonViernesTeamIC').value;
    const numeroSalonViernesIC = document.querySelector('.numeroSalonViernesTeamIC').value;
    const pisoViernesIC = document.querySelector('.pisoSalonViernesTeamIC').value;


    //INGLES
    //SER
    const horaLunesSC = document.querySelector('.horaLunesTeamSC').value;
    const salonLunesSC = document.querySelector('.nombreSalonLunesTeamSC').value;
    const numeroSalonLunesSC = document.querySelector('.numeroSalonLunesTeamSC').value;
    const pisoLunesSC = document.querySelector('.pisoSalonLunesTeamSC').value;

    const horaMartesSC = document.querySelector('.horaMartesTeamSC').value;
    const salonMartesSC = document.querySelector('.nombreSalonMartesTeamSC').value;
    const numeroSalonMartesSC = document.querySelector('.numeroSalonMartesTeamSC').value;
    const pisoMartesSC = document.querySelector('.pisoSalonMartesTeamSC').value;

    const horaMiercolesSC = document.querySelector('.horaMiercolesTeamSC').value;
    const salonMiercolesSC = document.querySelector('.nombreSalonMiercolesTeamSC').value;
    const numeroSalonMiercolesSC = document.querySelector('.numeroSalonMiercolesTeamSC').value;
    const pisoMiercolesSC = document.querySelector('.pisoSalonMiercolesTeamSC').value;

    const horaJuevesSC = document.querySelector('.horaJuevesTeamSC').value;
    const salonJuevesSC = document.querySelector('.nombreSalonJuevesTeamSC').value;
    const numeroSalonJuevesSC = document.querySelector('.numeroSalonJuevesTeamSC').value;
    const pisoJuevesSC = document.querySelector('.pisoSalonJuevesTeamSC').value;

    const horaViernesSC = document.querySelector('.horaViernesTeamSC').value;
    const salonViernesSC = document.querySelector('.nombreSalonViernesTeamSC').value;
    const numeroSalonViernesSC = document.querySelector('.numeroSalonViernesTeamSC').value;
    const pisoViernesSC = document.querySelector('.pisoSalonViernesTeamSC').value;

    //SER
    //segunda sección
    //tercera sección
    const nivelCamper = document.querySelector('.nivelInput').value;
    const prerrequisitoCamper = document.querySelector('.prerrequisitoInput').value;
    const tecnologiaCamper = document.querySelector('.tecnologiaInput').value;
    const tecnologiaTipoCamper = function (){
        let tecnologiasTiposCamper = document.querySelector('#tecnologiaTipo')
        let tecnologiaTipoCamper = tecnologiasTiposCamper.value;
        return tecnologiaTipoCamper;
    }

    const creditosCamper = document.querySelector('.creditosRMInput').value;
    const añoRMCamper = document.querySelector('.añoRMInput').value;
    const asignaturasRMCamper = document.querySelector('.asignaturasRMInput').value;
    //tercera sección
    //INPUTS.
    //NUEVO OBJETO
    const nuevoCamper = {
        nombre:nombreCamper,
        telefono:telefonoCamper,
        email:emailCamper,
        direccion:{
            direccion:direccionCamper,
            barrio:barrioCamper,
            medioTransporte:transporteCamper
        },
        sede:{
            ciudad:ciudadSedeC,
            direccion:direccionSedeC,
            telefono:telefonoSedeC
        },
        team:{
            numeroTeam:teamCamper,
            horarioTeam:{
                dia:{
                    lunes:{
                        hora:horaLunesC,
                        salon:{
                            nombreSalon:salonLunesC,
                            numero:numeroSalonLunesC,
                            piso:pisoLunesC
                        }
                    },
                    martes:{
                        hora:horaMartesC,
                        salon:{
                            nombreSalon:salonMartesC,
                            numero:numeroSalonMartesC,
                            piso:pisoMartesC
                        }
                    },
                    miercoles:{
                        hora:horaMiercolesC,
                        salon:{
                            nombreSalon:salonMiercolesC,
                            numero:numeroSalonMiercolesC,
                            piso:pisoMiercolesC
                        }
                    },
                    jueves:{
                        hora:horaJuevesC,
                        salon:{
                            nombreSalon:salonJuevesC,
                            numero:numeroSalonJuevesC,
                            piso:pisoJuevesC
                        }
                    },
                    viernes:{
                        hora:horaViernesC,
                        salon:{
                            nombreSalon:salonViernesC,
                            numero:numeroSalonViernesC,
                            piso:pisoViernesC
                        }
                    }
                }
            },
            horarioIngles:{
                dia:{
                    lunes:{
                        hora:horaLunesIC,
                        salon:{
                            nombreSalon:salonLunesIC,
                            numero:numeroSalonLunesIC,
                            piso:pisoLunesIC
                        }
                    },
                    martes:{
                        hora:horaMartesIC,
                        salon:{
                            nombreSalon:salonMartesIC,
                            numero:numeroSalonMartesIC,
                            piso:pisoMartesIC
                        }
                    },
                    miercoles:{
                        hora:horaMiercolesIC,
                        salon:{
                            nombreSalon:salonMiercolesIC,
                            numero:numeroSalonMiercolesIC,
                            piso:pisoMiercolesIC
                        }
                    },
                    jueves:{
                        hora:horaJuevesIC,
                        salon:{
                            nombreSalon:salonJuevesIC,
                            numero:numeroSalonJuevesIC,
                            piso:pisoJuevesIC
                        }
                    },
                    viernes:{
                        hora:horaViernesIC,
                        salon:{
                            nombreSalon:salonViernesIC,
                            numero:numeroSalonViernesIC,
                            piso:pisoViernesIC
                        }
                    }
                }
            },
            horarioSer:{
                dia:{
                    lunes:{
                        hora:horaLunesSC,
                        salon:{
                            nombreSalon:salonLunesSC,
                            numero:numeroSalonLunesSC,
                            piso:pisoLunesSC
                        }
                    },
                    martes:{
                        hora:horaMartesSC,
                        salon:{
                            nombreSalon:salonMartesSC,
                            numero:numeroSalonMartesSC,
                            piso:pisoMartesSC
                        }
                    },
                    miercoles:{
                        hora:horaMiercolesSC,
                        salon:{
                            nombreSalon:salonMiercolesSC,
                            numero:numeroSalonMiercolesSC,
                            piso:pisoMiercolesSC
                        }
                    },
                    jueves:{
                        hora:horaJuevesSC,
                        salon:{
                            nombreSalon:salonJuevesSC,
                            numero:numeroSalonJuevesSC,
                            piso:pisoJuevesSC
                        }
                    },
                    viernes:{
                        hora:horaViernesSC,
                        salon:{
                            nombreSalon:salonViernesSC,
                            numero:numeroSalonViernesSC,
                            piso:pisoViernesSC
                        }
                    }
                }
            }
        },
        nivel:{
            nivelActual:nivelCamper,
            preRequisito:prerrequisitoCamper,
            tecnologia:{
                pertenece:tecnologiaCamper,
                tipo:tecnologiaTipoCamper,
            },
            roadMap:{
                numeroCreditos:creditosCamper,
                año:añoRMCamper,
                numeroAsignaturas:asignaturasRMCamper
            }
        }
    }
    //NUEVO OBJETO
    campus.campers.nombre.unshift(nuevoCamper.nombre);
    campus.campers.telefono.unshift(nuevoCamper.telefono);
    campus.campers.email.unshift(nuevoCamper.email);
    campus.campers.direccion.direccion.unshift(nuevoCamper.direccion.direccion);
    campus.campers.direccion.barrio.unshift(nuevoCamper.direccion.barrio);
    campus.campers.direccion.medioTransporte.unshift(nuevoCamper.direccion.medioTransporte);


    campus.campers.team.numeroTeam.unshift(nuevoCamper.team.teamCamper);

    campus.campers.team.horarioTeam.dia.lunes.hora.unshift(nuevoCamper.team.horarioTeam.dia.lunes.hora);
    campus.campers.team.horarioTeam.dia.lunes.salon.nombreSalon.unshift(nuevoCamper.team.horarioTeam.dia.lunes.salon.nombreSalon)
    campus.campers.team.horarioTeam.dia.lunes.salon.numero.unshift(nuevoCamper.team.horarioTeam.dia.lunes.salon.numero);
    campus.campers.team.horarioTeam.dia.lunes.salon.piso.unshift(nuevoCamper.team.horarioTeam.dia.lunes.salon.piso);

    campus.campers.team.horarioTeam.dia.martes.hora.unshift(nuevoCamper.team.horarioTeam.dia.martes.hora);
    campus.campers.team.horarioTeam.dia.martes.salon.nombreSalon.unshift(nuevoCamper.team.horarioTeam.dia.martes.salon.nombreSalon)
    campus.campers.team.horarioTeam.dia.martes.salon.numero.unshift(nuevoCamper.team.horarioTeam.dia.martes.salon.numero);
    campus.campers.team.horarioTeam.dia.martes.salon.piso.unshift(nuevoCamper.team.horarioTeam.dia.martes.salon.piso);

    campus.campers.team.horarioTeam.dia.miercoles.hora.unshift(nuevoCamper.team.horarioTeam.dia.miercoles.hora);
    campus.campers.team.horarioTeam.dia.miercoles.salon.nombreSalon.unshift(nuevoCamper.team.horarioTeam.dia.miercoles.salon.nombreSalon)
    campus.campers.team.horarioTeam.dia.miercoles.salon.numero.unshift(nuevoCamper.team.horarioTeam.dia.miercoles.salon.numero);
    campus.campers.team.horarioTeam.dia.miercoles.salon.piso.unshift(nuevoCamper.team.horarioTeam.dia.miercoles.salon.piso);

    campus.campers.team.horarioTeam.dia.jueves.hora.unshift(nuevoCamper.team.horarioTeam.dia.jueves.hora);
    campus.campers.team.horarioTeam.dia.jueves.salon.nombreSalon.unshift(nuevoCamper.team.horarioTeam.dia.jueves.salon.nombreSalon)
    campus.campers.team.horarioTeam.dia.jueves.salon.numero.unshift(nuevoCamper.team.horarioTeam.dia.jueves.salon.numero);
    campus.campers.team.horarioTeam.dia.jueves.salon.piso.unshift(nuevoCamper.team.horarioTeam.dia.jueves.salon.piso);

    campus.campers.team.horarioTeam.dia.viernes.hora.unshift(nuevoCamper.team.horarioTeam.dia.viernes.hora);
    campus.campers.team.horarioTeam.dia.viernes.salon.nombreSalon.unshift(nuevoCamper.team.horarioTeam.dia.viernes.salon.nombreSalon)
    campus.campers.team.horarioTeam.dia.viernes.salon.numero.unshift(nuevoCamper.team.horarioTeam.dia.viernes.salon.numero);
    campus.campers.team.horarioTeam.dia.viernes.salon.piso.unshift(nuevoCamper.team.horarioTeam.dia.viernes.salon.piso);

    campus.campers.nivel.nivelActual.unshift(nuevoCamper.nivel.nivelCamper);
    campus.campers.nivel.preRequisito.unshift(nuevoCamper.nivel.prerrequisitoCamper);
    campus.campers.nivel.tecnologia.pertenece.unshift(nuevoCamper.nivel.tecnologia.tecnologiaCamper);
    campus.campers.nivel.tecnologia.tipo.unshift(nuevoCamper.nivel.tecnologia.tecnologiaTipoCamper);
    campus.campers.nivel.roadMap.numeroCreditos.unshift(nuevoCamper.nivel.roadMap.creditosCamper);
    campus.campers.nivel.roadMap.año.unshift(nuevoCamper.nivel.roadMap.añoRMCamper);
    campus.campers.nivel.roadMap.numeroAsignaturas.unshift(nuevoCamper.nivel.roadMap.   asignaturasRMCamper);

    formCampers.reset();

    contactoCampers.style.display="none";
    campusCampers.style.display="none";
    nivelesCampers.style.display="none";
    primerPaso.style.display="block";

    console.log(campus.campers);
    console.log(nuevoCamper);

    const {
        team:{
            horarioTeam:{
                dia:{
                    lunes:{
                        salon:{
                            nombreSalon
                        }
                    }
                }
            }
        }
    } = nuevoCamper

    console.log(nombreSalon)
})

//LLENAR DATOS.

//CAMPERS

//TRAINERS
const contactoTrainers = document.querySelector('.contactoTrainers');
const campusTrainers = document.querySelector('.campusTrainers');
const nivelesTrainers = document.querySelector('.nivelesTrainers');
const formTrainers = document.querySelector('#formTrainers');
//BOTONES
const next1T = document.querySelector('.next1T');
const previous1T = document.querySelector('.previous1T');

const next2T = document.querySelector('.next2T');
const previous2T = document.querySelector('.previous2T');

const enviarT = document.querySelector('.enviarT');
const previous3T = document.querySelector('.previous3T');
//BOTONES
//Botón primera sección Trainers
next1T.addEventListener("click", (e) => {
    e.preventDefault();
    contactoTrainers.style.display = "none";
    campusTrainers.style.display = "block";
})
previous1T.addEventListener("click", (e) => {
    e.preventDefault();
    contactoTrainers.style.display = "none";
    primerPaso.style.display = "block";
})
//Botón primera seccion Trainers
//Botón segunda sección Trainers
next2T.addEventListener("click", (e) => {
    e.preventDefault();
    campusTrainers.style.display = "none";
    nivelesTrainers.style.display = "block";
})
previous2T.addEventListener("click", (e) => {
    e.preventDefault();
    campusTrainers.style.display = "none";
    contactoTrainers.style.display = "block";
});

const diasT = document.querySelector(".diasT");
const lunesT = document.querySelector(".lunesT");
const martesT = document.querySelector(".martesT");
const miercolesT = document.querySelector(".miercolesT");
const juevesT = document.querySelector(".juevesT");
const viernesT = document.querySelector(".viernesT");

diasT.addEventListener("change", (e) => {
    e.preventDefault();
    let valorOptionDT = diasT.value;
    if (valorOptionDT === "lunes"){
        lunesT.style.display = "block";
        martesT.style.display = "none";
        miercolesT.style.display = "none";
        juevesT.style.display = "none";
        viernesT.style.display = "none";
    }else if (valorOptionDT === "martes"){
        martesT.style.display = "block";
        lunesT.style.display = "none";
        miercolesT.style.display = "none";
        juevesT.style.display = "none";
        viernesT.style.display = "none";
    }else if (valorOptionDT === "miercoles"){
        miercolesT.style.display = "block";
        martesT.style.display = "none";
        juevesT.style.display = "none";
        viernesT.style.display = "none";
        lunesT.style.display = "none";
    }else if (valorOptionDT === "jueves"){
        juevesT.style.display = "block";
        miercolesT.style.display = "none";
        martesT.style.display = "none";
        viernesT.style.display = "none";
        lunesT.style.display = "none";
    }else if (valorOptionDT === "viernes"){
        viernesT.style.display = "block";
        juevesT.style.display = "none";
        miercolesT.style.display = "none";
        martesT.style.display = "none";
        lunesT.style.display = "none";
    }
    else{
        lunesT.style.display = "none";
        martesT.style.display = "none";
        miercolesT.style.display = "none";
        juevesT.style.display = "none";
        viernesT.style.display = "none";

        // lunesC.style.display = "none";
    }
})

//Botón segunda sección Trainers
//Botón tercera sección Trainers
previous3T.addEventListener("click", (e) => {
    e.preventDefault();
    nivelesTrainers.style.display = "none";
    campusTrainers.style.display = "block";
})
//Botón tercera sección Trainers

//llenar datos

enviarT.addEventListener('click', function(e){
    e.preventDefault();
    //INPUTS:
    //primera sección
    const nombreTrainer = document.querySelector('.nombreInputT').value;
    const telefonoTrainer = document.querySelector('.telefonoInputT').value;
    const emailTrainer = document.querySelector('.emailInputT').value;
    //primera sección
    //segunda sección
    const ciudadSedeTrainer = document.querySelector('.ciudadSedeT').value;
    const direccionSedeTrainer = document.querySelector('.direccionSedeT').value;
    const telefonoSedeTrainer = document.querySelector('.telefonoSedeT').value;
    const teamTrainer = document.querySelector('.teamInputT').value;

    const horaLunesT = document.querySelector('.horaLunesTeamT');
    const numeroSalonLunesT = document.querySelector('numeroSalonLunesTeamT');
    const pisoSalonLunesT = document.querySelector('pisoSalonLunesTeamT');

    const horaMartesT = document.querySelector('.horaMartesTeamT');
    const numeroSalonMartesT = document.querySelector('numeroSalonMartesTeamT');
    const pisoSalonMartesT = document.querySelector('pisoSalonMartesTeamT');

    const horaMiercolesT = document.querySelector('.horaMiercolesTeamT');
    const numeroSalonMiercolesT = document.querySelector('numeroSalonMiercolesTeamT');
    const pisoSalonMiercolesT = document.querySelector('pisoSalonMiercolesTeamT');

    const horaJuevesT = document.querySelector('.horaJuevesTeamT');
    const numeroSalonJuevesT = document.querySelector('numeroSalonJuevesTeamT');
    const pisoSalonJuevesT = document.querySelector('pisoSalonJuevesTeamT');

    const horaViernesT = document.querySelector('.horaViernesTeamT');
    const numeroSalonViernesT = document.querySelector('numeroSalonViernesTeamT');
    const pisoSalonViernesT = document.querySelector('pisoSalonViernesTeamT');
    //segunda sección
    //tercera sección
    const tecnologiaTrainer = document.querySelector('.tecnologiaInputT').value;
    const tecnologiaTipoTrainer = document.querySelector('#tecnologiaTipoT').value

    //tercera sección
    //INPUTS.
    //NUEVO OBJETO}

    const nuevoTrainer = {
        nombre:nombreTrainer,
        telefono:telefonoTrainer,
        email:emailTrainer,
        sede:{
            ciudad:ciudadSedeTrainer,
            direccion:direccionSedeTrainer,
            telefono:telefonoSedeTrainer
        },
        team:{
            numeroTeam:teamTrainer,
            horarioTeam:{
                dia:{
                    lunes:{
                        hora:horaLunesT,
                        salon:{
                            numero:numeroSalonLunesT,
                            piso:pisoSalonLunesT
                        }
                    },
                    martes:{
                        hora:horaMartesT,
                        salon:{
                            numero:numeroSalonMartesT,
                            piso:pisoSalonMartesT
                        }
                    },
                    miercoles:{
                        hora:horaMiercolesT,
                        salon:{
                            numero:numeroSalonMiercolesT,
                            piso:pisoSalonMiercolesT
                        }
                    },
                    jueves:{
                        hora:horaJuevesT,
                        salon:{
                            numero:numeroSalonJuevesT,
                            piso:pisoSalonJuevesT
                        }
                    },
                    viernes:{
                        hora:horaViernesT,
                        salon:{
                            numero:numeroSalonViernesT,
                            piso:pisoSalonViernesT
                        }
                    }
                }
            }
        },
        tecnologia:{
            pertenece:tecnologiaTrainer,
            tipo:tecnologiaTipoTrainer
        }
    }

    //NUEVO OBJETO.
    campus.trainers.nombre.unshift(nuevoTrainer.nombre);
    campus.trainers.telefono.unshift(nuevoTrainer.telefono);
    campus.trainers.email.unshift(nuevoTrainer.email);
    campus.trainers.sede.ciudad.unshift(nuevoTrainer.ciudadSedeTrainer);
    campus.trainers.sede.direccion.unshift(nuevoTrainer.direccionSedeTrainer);
    campus.trainers.sede.telefono.unshift(nuevoTrainer.telefonoSedeTrainer);

    campus.trainers.team.numeroTeam.unshift(nuevoTrainer.team.teamTrainer);

    campus.trainers.team.horarioTeam.dia.lunes.hora.unshift(nuevoTrainer.team.horarioTeam.dia.lunes.hora);
    campus.trainers.team.horarioTeam.dia.lunes.salon.numero.unshift(nuevoTrainer.team.horarioTeam.dia.lunes.salon.numero);
    campus.trainers.team.horarioTeam.dia.lunes.salon.piso.unshift(nuevoTrainer.team.horarioTeam.dia.lunes.salon.piso);

    campus.trainers.team.horarioTeam.dia.martes.hora.unshift(nuevoTrainer.team.horarioTeam.dia.martes.hora);
    campus.trainers.team.horarioTeam.dia.martes.salon.numero.unshift(nuevoTrainer.team.horarioTeam.dia.martes.salon.numero);
    campus.trainers.team.horarioTeam.dia.martes.salon.piso.unshift(nuevoTrainer.team.horarioTeam.dia.martes.salon.piso);

    campus.trainers.team.horarioTeam.dia.miercoles.hora.unshift(nuevoTrainer.team.horarioTeam.dia.miercoles.hora);
    campus.trainers.team.horarioTeam.dia.miercoles.salon.numero.unshift(nuevoTrainer.team.horarioTeam.dia.miercoles.salon.numero);
    campus.trainers.team.horarioTeam.dia.miercoles.salon.piso.unshift(nuevoTrainer.team.horarioTeam.dia.miercoles.salon.piso);

    campus.trainers.team.horarioTeam.dia.jueves.hora.unshift(nuevoTrainer.team.horarioTeam.dia.jueves.hora);
    campus.trainers.team.horarioTeam.dia.jueves.salon.numero.unshift(nuevoTrainer.team.horarioTeam.dia.jueves.salon.numero);
    campus.trainers.team.horarioTeam.dia.jueves.salon.piso.unshift(nuevoTrainer.team.horarioTeam.dia.jueves.salon.piso);

    campus.trainers.team.horarioTeam.dia.viernes.hora.unshift(nuevoTrainer.team.horarioTeam.dia.viernes.hora);
    campus.trainers.team.horarioTeam.dia.viernes.salon.numero.unshift(nuevoTrainer.team.horarioTeam.dia.viernes.salon.numero);
    campus.trainers.team.horarioTeam.dia.viernes.salon.piso.unshift(nuevoTrainer.team.horarioTeam.dia.viernes.salon.piso);

    campus.trainers.tecnologia.pertenece.unshift(nuevoTrainer.tecnologia.tecnologiaTrainer);
    campus.trainers.tecnologia.tipo.unshift(nuevoTrainer.tecnologia.tecnologiaTipoTrainer);

    formTrainers.reset();

    contactoTrainers.style.display="none";
    campusTrainers.style.display="none";
    nivelesTrainers.style.display="none";
    primerPaso.style.display="block";

    console.log(campus.trainers);
    console.log(nuevoTrainer);


    const {
        tecnologia:{tipo}
    } = nuevoTrainer

    console.log(tipo);
})

//llenar datos
//TRAINER
//DEMAS SECCIONES
const formSedes = document.querySelector("#formSedes");
const previousS = document.querySelector(".previousS");
const previousN = document.querySelector(".previousN");
const previousT = document.querySelector(".previousT");
const previousTeam = document.querySelector(".previousTeam");
const previousR = document.querySelector(".previousR");

//BOTONES
function previous(elemento, section){
    elemento.addEventListener("click", e => {
    e.preventDefault();
    section.style.display = "none";
    primerPaso.style.display = "block";
    })
}

previous(previousS, sedesSection);
previous(previousN, nivelesSection);
previous(previousT, tecnologiasSection);
previous(previousTeam, teamsSection);
previous(previousR, roadMapSection);
//BOTONES
//DEMAS SECCIONES

//SEDES

//LLENAR DATOS
const enviarS = document.querySelector(".enviarSede")

enviarS.addEventListener('click', function(e){
    e.preventDefault();

    const ciudadSede = document.querySelector(".ciudadSede").value;
    const direccionSede = document.querySelector(".direccionSede").value;
    const telefonoSede = document.querySelector(".telefonoSede").value;

    //NUEVO OBJETO

    const nuevaSede = {
        ciudad:ciudadSede,
        direccion:direccionSede,
        telefono:telefonoSede
    }

    //NUEVO OBJETO

    campus.sedes.ciudad.unshift(nuevaSede.ciudad);
    campus.sedes.direccion.unshift(nuevaSede.direccion);
    campus.sedes.telefono.unshift(nuevaSede.telefono);

    formSedes.reset();
    sedesSection.style.display = 'none';
    primerPaso.style.display = 'block';

    console.log(campus.sedes);
    console.log(nuevaSede);

    const{telefono} = nuevaSede;
    console.log(telefono);

    const{direccion} = nuevaSede;
    console.log(direccion);
})
//LLENAR DATOS
//SEDES

//NIVELES

const formNiveles = document.querySelector(".formNiveles");
const enviarN = document.querySelector(".enviarNivel");

//LLENAR DATOS
enviarN.addEventListener("click", (e) => {
    e.preventDefault();

    const nivel = document.querySelector(".nivel").value;
    const prerrequisito = document.querySelector(".prerrequisito").value;
    const tecnologiaN  = document.querySelector(".tecnologiaNivel").value;
    const tecnologiaTipoN = document.querySelector("#tipoTecnologiaNivel").value;

    //NUEVO OBJETO
    const nuevoNivel = {
        nombre: nivel,
        prerrequisito: prerrequisito,
        tecnologia:{
            pertenece: tecnologiaN,
            tipo:tecnologiaTipoN
        }
    }
    //NUEVO OBJETO

    campus.niveles.nombre.unshift(nuevoNivel.nombre);
    campus.niveles.prerrequisto.unshift(nuevoNivel.prerrequisito);
    campus.niveles.tecnologia.pertenece.unshift(nuevoNivel.tecnologia.pertenece);
    campus.niveles.tecnologia.tipo.unshift(nuevoNivel.tecnologia.tipo);

    formNiveles.reset();
    nivelesSection.style.display = 'none';
    primerPaso.style.display = 'block';

    console.log(campus.niveles);
    console.log(nuevoNivel);

    const prerrequisitoNivel = nuevoNivel.prerrequisito;
    console.log(prerrequisitoNivel);
});

//LLENAR DATOS

//NIVELES

//TECNOLOGIAS

const formTecnologias = document.querySelector(".formTecnologias");
const enviarTecnologia = document.querySelector(".enviarTecnologia");

//LLENAR DATOS

enviarTecnologia.addEventListener("click", (e)=>{
    e.preventDefault();

    const tecnologia = document.querySelector(".tecnologia").value;
    const tipoTecnologia = document.querySelector("#tipoTecnologia").value;
    const modalidadTecnologia = document.querySelector("#modalidadTecnologia").value;
    const sandboxTecnologia = document.querySelector("#sandbox").value;

    //NUEVO OBJETO

    const nuevaTecnologia = {
        nombre: tecnologia,
        tipo: tipoTecnologia,
        modalidad: modalidadTecnologia,
        sandbox: sandboxTecnologia
    }

    //NUEVO OBJETO

    campus.tecnologias.nombre.unshift(nuevaTecnologia.nombre);
    campus.tecnologias.tipo.unshift(nuevaTecnologia.tipo);
    campus.tecnologias.modalidad.unshift(nuevaTecnologia.modalidad);
    campus.tecnologias.sandbox.unshift(nuevaTecnologia.sandbox);

    formTecnologias.reset();
    tecnologiasSection.style.display = 'none';
    primerPaso.style.display = 'block';

    console.log(campus.tecnologias);
    console.log(nuevaTecnologia);

    const {sandbox} = nuevaTecnologia;
    console.log(sandbox);

});

//LLENAR DATOS

//TECNOLOGIAS

//TEAMS

const formTeams = document.querySelector(".formTeams");
const enviarTeams = document.querySelector(".enviarTeam");

enviarTeams.addEventListener("click", (e) => {
    e.preventDefault();

    const team = document.querySelector(".team").value;

    const horaLunesTeam = document.querySelector(".horaLunesTeam").value;
    const numeroSalonLunesTeam = document.querySelector(".numeroSalonLunesTeam").value;
    const pisoSalonLunesTeam = document.querySelector(".pisoSalonLunesTeam").value;

    const horaMartesTeam = document.querySelector(".horaMartesTeam").value;
    const numeroSalonMartesTeam = document.querySelector(".numeroSalonMartesTeam").value;
    const pisoSalonMartesTeam = document.querySelector(".pisoSalonMartesTeam").value;

    const horaMiercolesTeam = document.querySelector(".horaMiercolesTeam").value;
    const numeroSalonMiercolesTeam = document.querySelector(".numeroSalonMiercolesTeam").value;
    const pisoSalonMiercolesTeam = document.querySelector(".pisoSalonMiercolesTeam").value;

    const horaJuevesTeam = document.querySelector(".horaJuevesTeam").value;
    const numeroSalonJuevesTeam = document.querySelector(".numeroSalonJuevesTeam").value;
    const pisoSalonJuevesTeam = document.querySelector(".pisoSalonJuevesTeam").value;

    const horaViernesTeam = document.querySelector(".horaViernesTeam").value;
    const numeroSalonViernesTeam = document.querySelector(".numeroSalonViernesTeam").value;
    const pisoSalonViernesTeam = document.querySelector(".pisoSalonViernesTeam").value;

    //NUEVO OBJETO

    const nuevoTeam = {
        numero: team,
        horario:{
            dia:{
                lunes:{
                    hora:horaLunesTeam,
                    salon:{
                        numero:numeroSalonLunesTeam,
                        piso:pisoSalonLunesTeam
                    }
                },
                martes:{
                    hora:horaMartesTeam,
                    salon:{
                        numero:numeroSalonMartesTeam,
                        piso:pisoSalonMartesTeam
                    }
                },
                miercoles:{
                    hora:horaMiercolesTeam,
                    salon:{
                        numero:numeroSalonMiercolesTeam,
                        piso:pisoSalonMiercolesTeam
                    }
                },
                jueves:{
                    hora:horaJuevesTeam,
                    salon:{
                        numero:numeroSalonJuevesTeam,
                        piso:pisoSalonJuevesTeam
                    }
                },
                viernes:{
                    hora:horaViernesTeam,
                    salon:{
                        numero:numeroSalonViernesTeam,
                        piso:pisoSalonViernesTeam
                    }
                }
            }
        }
    }

    //NUEVO OBJETO

    campus.teams.numero.unshift(nuevoTeam.numero);


    campus.teams.horario.dia.lunes.hora.unshift(nuevoTeam.horario.dia.lunes.hora);
    campus.teams.horario.dia.lunes.salon.numero.unshift(nuevoTeam.horario.dia.lunes.salon.numero);
    campus.teams.horario.dia.lunes.salon.piso.unshift(nuevoTeam.horario.dia.lunes.salon.piso);

    campus.teams.horario.dia.martes.hora.unshift(nuevoTeam.horario.dia.martes.hora);
    campus.teams.horario.dia.martes.salon.numero.unshift(nuevoTeam.horario.dia.martes.salon.numero);
    campus.teams.horario.dia.martes.salon.piso.unshift(nuevoTeam.horario.dia.martes.salon.piso);

    campus.teams.horario.dia.miercoles.hora.unshift(nuevoTeam.horario.dia.miercoles.hora);
    campus.teams.horario.dia.miercoles.salon.numero.unshift(nuevoTeam.horario.dia.miercoles.salon.numero);
    campus.teams.horario.dia.miercoles.salon.piso.unshift(nuevoTeam.horario.dia.miercoles.salon.piso);

    campus.teams.horario.dia.jueves.hora.unshift(nuevoTeam.horario.dia.jueves.hora);
    campus.teams.horario.dia.jueves.salon.numero.unshift(nuevoTeam.horario.dia.jueves.salon.numero);
    campus.teams.horario.dia.jueves.salon.piso.unshift(nuevoTeam.horario.dia.jueves.salon.piso);

    campus.teams.horario.dia.viernes.hora.unshift(nuevoTeam.horario.dia.viernes.hora);
    campus.teams.horario.dia.viernes.salon.numero.unshift(nuevoTeam.horario.dia.viernes.salon.numero);
    campus.teams.horario.dia.viernes.salon.piso.unshift(nuevoTeam.horario.dia.viernes.salon.piso);

    formTeams.reset();
    teamsSection.style.display = 'none';
    primerPaso.style.display = 'block';

    console.log(campus.teams);
    console.log(nuevoTeam);
});
//TEAMS

//ROAD MAP

const formRM = document.querySelector(".formRM");
const enviarRM = document.querySelector(".enviarRM");

//LLENAR DATOS

enviarRM.addEventListener("click", (e) => {
    e.preventDefault();
    const roadMap = document.querySelector(".roadMap").value;
    const creditosRM = document.querySelector(".creditosRM").value;
    const añoRM = document.querySelector(".añoRM").value;
    const asignaturasRM = document.querySelector(".asignaturasRM").value;

    //NUEVO OBJETO

    const nuevoRoadMap = {
        nombre:roadMap,
        creditos:creditosRM,
        año:añoRM,
        asignaturas:asignaturasRM
    }

    //NUEVO OBJETO

    campus.roadMap.nombre.unshift(nuevoRoadMap.nombre);
    campus.roadMap.creditos.unshift(nuevoRoadMap.creditos);
    campus.roadMap.año.unshift(nuevoRoadMap.año);
    campus.roadMap.asignaturas.unshift(nuevoRoadMap.asignaturas);

    formRM.reset();
    roadMapSection.style.display="none";
    primerPaso.style.display="block";

    console.log(campus.roadMap);
    console.log(nuevoRoadMap);

    const creditosRoadMap = nuevoRoadMap.creditos;
    console.log(creditosRoadMap);
})

//LLENAR DATOS
//ROAD MAP
//TALLER

//1.1
//TALLER