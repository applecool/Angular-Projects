System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProfessorService;
    return {
        setters:[],
        execute: function() {
            ProfessorService = (function () {
                function ProfessorService() {
                }
                ProfessorService.prototype.getProf = function () {
                    return ["prof1", "prof2", "prof3"];
                };
                return ProfessorService;
            }());
            exports_1("ProfessorService", ProfessorService);
        }
    }
});
//# sourceMappingURL=professor.service.js.map