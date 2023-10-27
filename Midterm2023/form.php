<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission Result</title>
</head>
<body>
    <h2>Form Submission Result</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $name = $_GET["participantName"];
        $email = $_GET["emailAddress"];
        $phone = $_GET["phoneNumber"];
        $member = $_GET["memberStatus"];
        $date = $_GET["eventDate"];
    }
        if ( isset($_GET['success']))
        {
        echo "<p>Name: " . $name . "</p>";
        echo "<p>Email: " . $email . "</p>";
        echo "<p>Phone: " . $phone . "</p>";
        echo "<p>Member Status: " . $member . "</p>";
        echo "<p>Event Date: " . $date . "</p>";
        }
        if (isset($_GET['failed']))
        {
                echo $TestMessage;
                echo "<h1 style='color:red;padding:3%;'>SQL Error !!</h1>";
        } 

    ?>
</body>
</html>
