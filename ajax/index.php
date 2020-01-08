<?php

$con = mysqli_connect('localhost', 'root');
mysqli_select_db($con, 'ajaxformdb');


?>

<!DOCTYPE html>
<html>
    <head>
        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container">
            <div class="col-md-6">
                <h2 class="text-center mt-2 mb-2">Form Submit Using Ajax</h2>
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" name="password" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Degree</label>
                        <select class="form-control" onchange="myFun(this.value)">
                            <option>Select Degree</option>
                            <?php

                            $q= "select * from degree";
                            $result=mysqli_query($con , $q);
                            while($rows= mysqli_fetch_array($result)){
                                ?>
                                    <option value="<?php echo $rows['mid']; ?>"><?php echo $rows['degrees'] ?></option>
                            <?php
                            }
                            ?>
                            
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Class</label>
                        <select class="form-control" id="dataget">
                            <option>Select Class</option>
                            
                        </select>
                    </div>
                    <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <script>
            function myFun(datavalue){
                $.ajax({
                            url:'class.php',
                            type:'POST',
                            data:{ datapost: datavalue},
                            success: function(result){
                                    $('#dataget').html(result);
                            }

                });

            }
        </script>
    </body>
</html>
