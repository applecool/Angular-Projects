System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.project = {
                        title: "Angular 2 for Insights",
                        rating: 4.9324,
                        team: 11111,
                        price: 100.9,
                        releaseDate: new Date(2016, 3, 1)
                    };
                    this.post = {
                        title: "Insights is Awesome",
                        body: "\n            It changes the way we look at data. Used technologies are Angular 2, TypeScript, SASS and Java with gulp bindings. It is a platform which allows you to ask the data questions.        \n        "
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1> Details of the Project - High Profile</h1>\n    {{project.title| uppercase}}\n    <br/>\n    {{project.rating|number:'2.2-2'}}\n    <br/>\n    {{project.team| number}}\n    <br/>\n    {{project.price| currency:'INR'}}\n    <br/>\n    {{project.releaseDate| date: 'year'}}\n    <br/>\n    {{project| json}}\n    <br/>\n    {{post.title}}\n    <br/>\n    {{post.body|summary}}\n    ",
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map