<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Browser tests</title>
  <!-- code/css to be tested: -->
  <script src="TreeHouse_Badges.js"></script>
  <script src="TreeHouse.js"></script>
<!-- mocha+chai: -->
  <script src="../node_modules/mocha/mocha.js"></script>
  <script src="../node_modules/chai/chai.js"></script>
  <link rel="stylesheet" media="all" href="../node_modules/mocha/mocha.css">
</head>

<body>
<!-- partitions for output -->

  <div id="mocha"><p><a href=".">Index</a></p></div>
  <div id="other"></div>

<!-- set up mocha tests -->
<script>mocha.setup('bdd')</script>
<script src="TreeHouse-test.js"></script>
<script>
  mocha.checkLeaks();
  mocha.run();
</script>
</body>
</html>

var chai = require('chai')
var expect = chai.expect