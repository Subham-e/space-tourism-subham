const toggleBtn = document.querySelector(".toggler");

toggleBtn.addEventListener('click', function(err) {
  document.querySelector(".navbar-nav").classList.toggle("activeMenu");
  if (document.querySelector('.navbar-nav').classList.contains("activeMenu")) {
    document.querySelector(".toggler").src = "assets/shared/icon-close.svg";
  } else {
    document.querySelector(".toggler").src = "assets/shared/icon-hamburger.svg";
  };
});

switch (window.location.pathname) {
  case '/crew-commander.html':
    document.querySelector(".commander").classList.add('activeCrewLink');
      document.querySelector(".crew").classList.add('activeNav');
    break;

    case '/crew-engineer.html':
      document.querySelector(".engineer").classList.add('activeCrewLink');
          document.querySelector(".crew").classList.add('activeNav');
      break;

      case '/crew-pilot.html':
        document.querySelector(".pilot").classList.add('activeCrewLink');
            document.querySelector(".crew").classList.add('activeNav');
        break;

        case '/crew-specialist.html':
          document.querySelector(".specialist").classList.add('activeCrewLink');
              document.querySelector(".crew").classList.add('activeNav');
          break;

          case '/destination-moon.html':
            document.querySelector(".moon").classList.add('activeDestinationLink');
            document.querySelector(".destination").classList.add('activeNav');
            break;

            case '/destination-europa.html':
              document.querySelector(".europa").classList.add('activeDestinationLink');
              document.querySelector(".destination").classList.add('activeNav');

              break;

              case '/destination-mars.html':
                document.querySelector(".mars").classList.add('activeDestinationLink');
                document.querySelector(".destination").classList.add('activeNav');

                break;

                case '/destination-titan.html':
                  document.querySelector(".titan").classList.add('activeDestinationLink');
                  document.querySelector(".destination").classList.add('activeNav');

                  break;

                  case '/index.html':
                    document.querySelector(".home").classList.add("activeNav");
                    break;

                        case '/technology-capsule.html':
                          document.querySelector(".technology").classList.add("activeNav");
                          document.querySelector(".technologyImage").src="assets/technology/image-space-capsule-portrait.jpg";
                          document.querySelector(".capsule").classList.add("activeTechnologyLinks");
                          break;

                             case '/technology-vehicle.html':
                             document.querySelector(".technology").classList.add("activeNav");
                             document.querySelector(".technologyImage").src="assets/technology/image-launch-vehicle-portrait.jpg";
                             document.querySelector(".vehicle").classList.add("activeTechnologyLinks");
                              break;

                             case '/technology-spaceport.html':
                             document.querySelector(".technology").classList.add("activeNav");

                             document.querySelector(".technologyImage").src="assets/technology/image-spaceport-portrait.jpg";
                              document.querySelector(".spaceport").classList.add("activeTechnologyLinks");

                             break;
  default:

}
