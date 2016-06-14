System.register(['angular2/core', './professor.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, professor_service_1;
    var ProfessorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (professor_service_1_1) {
                professor_service_1 = professor_service_1_1;
            }],
        execute: function() {
            // Step2:A component decorator function which should contain a selector and a template
            ProfessorsComponent = (function () {
                function ProfessorsComponent(professorService) {
                    this.title = 'The title of the professors';
                    this.professors = professorService.getProf();
                }
                ProfessorsComponent = __decorate([
                    core_1.Component({
                        //step 4:selector and template
                        //step 5: use interpolation - binding the component with the view
                        selector: 'professors',
                        template: "<h2>Professors</h2>\n    {{title}}\n    <ul>\n    <li *ngFor=\"#professor of professors\">\n    {{professor}}\n    </li>\n    </ul>",
                        providers: [professor_service_1.ProfessorService]
                    }), 
                    __metadata('design:paramtypes', [professor_service_1.ProfessorService])
                ], ProfessorsComponent);
                return ProfessorsComponent;
            }());
            exports_1("ProfessorsComponent", ProfessorsComponent);
        }
    }
});
//# sourceMappingURL=professors.component.js.map