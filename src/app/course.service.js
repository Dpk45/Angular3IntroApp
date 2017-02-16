"use strict";
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourse = function () {
        return ["course1", "course2", "course3", "course4"];
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map