# base-teaching - Lesson 1

First gulp.js tasks and basic connfiguration.
>
We are created gulp tasks and watchers which helps our in work with code and improves it quality and efficiency. We also took care of the folder structure and split the files into **source** and **distribution** files. I explained how watchers work and how to use them. These gulp tasks are basics but in next lessons we we will improve it.
>
The tools we used:
- [gulp.js](https://gulpjs.com/) to task managing
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) to compile SASS to CSS
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to prefix CSS
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) to minify CSS
- [gulp-minify](https://www.npmjs.com/package/gulp-minify) to minify JavaScript
- [browser-sync](https://www.browsersync.io/) to more pleasant work
- [gulp-clean](https://www.npmjs.com/package/gulp-clean) to clean **./dist** before source compilation
- simple copy function to copy assets and html files



## Getting Started

### Prerequisites

Clone repository locally:
```
git clone https://github.com/plumthedev/base-teaching.git
```

Install necessary npm modules:
```
npm install
```

### Development and building

Development:
```
npm run dev
```

Building:
```
npm run build
```

### Moving between lessons

If you have **base-teaching** locally, you can move beetwen lessons using git. Only need to choose a lesson number from [Table of Contents](https://github.com/plumthedev/base-teaching#table-of-contents) and format it to **lesson-&lt;number&gt;** branch name. You can switch beetwen branches/lessons, typing:

```
git checkout lesson-1
```

### Prerequisites

You need to have: 
- [npm](https://www.npmjs.com/)
- [node](https://nodejs.org/en/)
- [git](https://git-scm.com/)