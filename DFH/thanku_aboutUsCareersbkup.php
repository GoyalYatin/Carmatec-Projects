<?php
if(isset($_POST['submit']))
{	
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$jobTitle = $_POST['jobTitle'];	
	$email = $_POST['email'];
	$careerMessage = "\n\n The Career Details are :\n
		  Name				: $name\n
		  subject			: $subject\n
		  Job Title			: $jobTitle\n
		  Email				: $email\n";	  
	
	
	//$to      = 'ganeshk@carmatec.com';
	//$to      = 'Johnny Walker <jwalker@ashley-martin.com>';	
	$to      = 'Human Resources <hr@designsforhealth.com>';	
	$subject = 'Career Details';
	$message = $careerMessage;	
	$path = $_SERVER['DOCUMENT_ROOT']."/uploads/"; 
	$filename =  $_FILES['cv']['name'];
    $file = $path.$filename;
    //$file_size = filesize($file);
    $content = chunk_split(base64_encode(file_get_contents($_FILES['cv']['tmp_name'])));
    $uid = md5(uniqid(time()));
    $filename = basename($file);
    $header = "From: ".$name." <".$email.">\r\n";
    $header .= "Reply-To: ".$email."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
    $header .= "This is a multi-part message in MIME format.\r\n";
    $header .= "--".$uid."\r\n";
    $header .= "Content-type:text/plain; charset=iso-8859-1\r\n";
    $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $header .= $message."\r\n\r\n";
    $header .= "--".$uid."\r\n";
    $header .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n"; // use different content types here
    $header .= "Content-Transfer-Encoding: base64\r\n";
    $header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
    $header .= $content."\r\n\r\n";
    $header .= "--".$uid."--";
	$success = mail($to, $subject, $message, $header);
    if($success)
	{
		$flag1=1;		
	}
	else {
		$flag1=0;
	}
	
	$touser = $name."<".$email.">";
    $subjectuser = "Designs for Health - Thank You";
    $messageuser = "Thank you! We will contact you as soon as possible.";
    $headers2 = 'From: Human Resources <hr@designsforhealth.com>' . "\r\n" .
       'Reply-To: Human Resources <hr@designsforhealth.com>' . "\r\n" .
       'X-Mailer: PHP/' . phpversion();
    $successtouser = mail($touser, $subjectuser, $messageuser,$headers2);
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title>DFH- About Us- Better nutrition for better health</title>
<meta name="description" content="We are a leading manufacturer of nutritional supplements offered to health care professionals and their patients">
<meta name="keywords" content="designsforhealth, designs for health inc, dietary supplement, nutrition for health, nutrient research, nutritional research, nutritional supplement, the dietary supplement, health care research, dietary supplements, workout supplements, nutrition training, quality nutritional supplements, importance of training and education in health care, health and nutrition companies, dietary supplement companies, nutritional supplement companies">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width"/>


<link rel="shortcut icon" href="media/images/favicon.ico" />
<link rel="stylesheet" type="text/css" href="media/styles/styles.css" />
<link rel="stylesheet" type="text/css" href="media/styles/design4health_content.css" />
<link rel="stylesheet" type="text/css" href="media/styles/design4health_layout.css" />

<link rel="stylesheet" media="only screen and (max-width: 1024px)" href="media/styles/styles_1024.css" />
<link rel="stylesheet" media="only screen and (max-width: 480px)" href="media/styles/styles_480.css" />
<link rel="stylesheet" media="only screen and (-webkit-min-device-pixel-ratio : 1.5),
only screen and (min-device-pixel-ratio : 1.5)" href="media/styles/styles_480.css" />

<!--[if IE 8]>
	<link rel="stylesheet" type="text/css" href="media/styles/ie8.css">
<![endif]-->

<!--[if IE 7]>
	<link rel="stylesheet" type="text/css" href="media/styles/ie7.css">
<![endif]-->

<noscript>
<style type="text/css">
	.dfh_main_wrapper{
		display:none;
	}
</style>
    <div class="noscript" style="width:100%; margin:50px auto; padding: 10px 0;text-align:center; font: bold 18px arial; color: #000; background-color:#6699FF">
	   Your browser's JavaScript seems to be Disabled. Please enable the JavaScript to get all functionalty of the site.
	</div>
</noscript>

</head>
<body>
    
    <div class="dfh_main_wrapper" >
	<span class="page_width">&nbsp;</span>
    		<div class="fixed_wrapper_outer">
            	
                <div class="headerWrap_outer">
                	<div class="headerWrap">
                    	<div class="DFH_logoContainer">
                        	<a href="index.html"><img src="media/images/DFH_logo.png"/></a>
                        </div>
                        <div class="header_rigthContainer">
                        	<div class="login_links">
                            	<ul>
                                	<li class="home_loginLink"><a href="index.html">home</a></li>
                                    
                                    <li class="needHelp_loginLink">
                                    	<a href="Need_Help.html">need help</a>
                                        <ul class="needHelp_loginUL">
                                        	<li><a href="">Forgot password</a></li>
                                        	<li><a href="">Search by name</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="shoppingCart_loginWrapper">
                            	<span class="onlineCatalog_link">
                                	<a href="http://catalog.designsforhealth.com">Designs for Health Online Catalog</a>
                                </span>
                            </div>
                        </div>
						
<div class="menu-toggle">
<a href="javascript:void(0)">
	MENU
</a>
</div>
                        <div class="mainMenuSearch_header">
                        	<div class="mainMenu_nav">
                        		<ul class="mainMenu_navLI">
                            		<li class="mainMenu_About selected_mainMENU">
                                    	<a href="aboutUs.html">About Us</a>
                                    	<ul class="mainMenu_list_sublist">
                                            <li class="mainMenu_list_sublistFLI">
                                                <a href="aboutUs_Leadership.html"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">

                                                            <img src="media/images/menu_images/Leadership_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Leadership</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Get to know the minds behind the working of the company!</p>
                                                    </div>
                                                </div></a>
                                                <a href="aboutUs_Philosophy.html"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Philosophy_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Philosophy</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>"Science First" is not just our motto, it's our commitment towards you...</p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            <li class="mainMenu_noborder">
                                                <a href="aboutUs_ScienceTeam.html"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Science_Team_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Science Team</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Get to know the veterans from the field of science working with us...</p>
                                                    </div>
                                                </div></a>
                                                <a href="aboutUs_Careers.html"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Careers_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Careers</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Get on board to work with our innovative and best in class team!</p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li class="mainMenu_Product">
                                        <a href="Professional_Products.html">Professional Products</a>
                                        <ul class="mainMenu_list_sublist">
                                            <li class="mainMenu_list_sublistFLI">
                                                <a href="http://catalog.designsforhealth.com/Whats-New"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/What's_new_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>What's new</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Browse through our newly launched product line!</p>
                                                    </div>
                                                </div></a>
                                                <a href="http://catalog.designsforhealth.com/Condition-Specific-Index"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Condition_Specific_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">

                                                            <h2>Product Category Index</h2>

                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Whatever the condition, we have the solution!</p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            <li>
                                                <a href="http://catalog.designsforhealth.com/Monthly-Specials"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Monthly_Specials_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Monthly Specials</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Browse through our catalog  for monthly specials!</p>
                                                    </div>
                                                </div></a>
                                                <a href="http://catalog.designsforhealth.com/Nutrient-Classification-Index"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Nutrient _Classification_Index_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Nutrient <br />Classification Index</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Find your nutrient from our classified database</p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            <li class="mainMenu_list_sublistLLI">
                                                <a href="http://catalog.designsforhealth.com/A-to-Z"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/AtoZ_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>A to Z</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Find the desired product you are looking for from our classified...</p>
                                                    </div>
                                                </div></a>
                                                <a href="http://catalog.designsforhealth.com/Accessories"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Accessories_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Accessories</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Browse through our accessory list to find the one you like!</p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            
                                            <!--<li class="mainMenu_list_sublistLLI sitoMedica_topLink">
                                                <a href="SitoMedica.html">
                                                	<h4>SitoMedica</h4>
                                                    <div class="sitoMedica_imgWrap">
                                                    	<img src="media/images/sitoMedica_topMenu.png" alt="SitoMedica" />
                                                    </div>
                                                </a>
                                            </li>-->                                           
                                        </ul>
                                    </li>
                                    <li class="mainMenu_Research">
                                        <a href="Practice_Development.html">Practice Development</a>
                                        <ul class="mainMenu_list_sublist">
                                            <li class="mainMenu_list_sublistFLI">
                                                <a href="http://catalog.designsforhealth.com/library/Premiere-Platform"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Premiere_Platform_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Premier Platform</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Premium Services in Support of the Integrative Healthcare Practitioner</p>
                                                    </div>
                                                </div></a>
                                                <a href="Practice_Development_Testing.html"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Testing_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Testing</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Designs for Health has teamed with Metametrix Clinical Laboratory...</p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            <li class="mainMenu_noborder">
                                                <a href="http://catalog.designsforhealth.com/library/Patient-Workshops"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Patient_Work_Shops_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Patient Work Shops</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Convenient and cost effective way to improve the health of your patients...</p>
                                                    </div>
                                                </div></a>
                                                <a href="PracticeDevelopment_dfhealth_estore.html"><div class="menu_sublistWrap menu_sublistWrapBottom ">
                                                  <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/dfhealth-e-store_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>DFHealth-e-store</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Creating a seamless source of revenue was never easier!</p>
                                                    </div>  
                                                </div></a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    
                                    <li class="mainMenu_Research">
                                        <a href="http://catalog.designsforhealth.com/library">Library</a>
                                    </li>
                                    <li class="mainMenu_Research">
                                        <a href="ResearchEducation.html">Research & Education</a>
                                        <ul class="mainMenu_list_sublist">
                                            <li class="mainMenu_list_sublistFLI">
                                                <a href="ResearchEducation_Events.html"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Events_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Events</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Get the lowdown on events and keynote speeches by industry...</p>
                                                    </div>
                                                </div></a>
                                                <a href="ResearchEducation_NutrientRoundtable.html"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Nutrient_Roundtable_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Nutrient Roundtable</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Teleconference with our  expert for discussions focusing on the clinical...</p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            <li class="mainMenu_noborder">
                                                <a href="ResearchEducation_ClinicalRounds.html"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Clinical_Rounds_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Clinical Rounds</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Get on a conference call with nationally renowned experts in the...</p>
                                                    </div>
                                                </div></a>
                                                <a href="ResearchEducation_EducationalWebinars.html"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Educational_Webinars_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Educational Webinars</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Be a part of educational webinars on hottest topics and latest advances...</p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li class="mainMenu_Quality">
                                        <a href="Quality_Manufacturing.html">Quality & Manufacturing</a>
                                        <ul class="mainMenu_list_sublist">
                                            <li class="mainMenu_list_sublistFLI">
                                                <a href="QualityManufacturing_QualityandEfficacy.html"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Quality&Efficacy_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Quality & Efficacy</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Professional-grade nutritional supplement formulated and...</p>
                                                    </div>
                                                </div></a>
                                                <a href="QualityManufacturing_Manufacturing.html"><div class="menu_sublistWrap menu_sublistWrapBottom">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Manufacturing_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Manufacturing</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Our products are produced utilizing the highest standards of... </p>
                                                    </div>
                                                </div></a>
                                            </li>
                                            <li class="mainMenu_noborder">
                                                <a href="QualityManufacturing_WarehousingFulfillment.html"><div class="menu_sublistWrap">
                                                    <div class="menu_sublistWrap_heading">
                                                        <div class="imgWrapper">
                                                            <img src="media/images/menu_images/Warehousing&Fulfillment_menuimg.jpg" alt="Design for Health Products"/>
                                                        </div>                                                    
                                                        <div class="headingWrapper">
                                                            <h2>Warehousing & Fulfillment</h2>
                                                        </div>
                                                    </div>
                                                    <div class="menu_sublistWrap_desc">
                                                            <p>Our exceptional warehousing unit makes us capable of delivering...</p>
                                                    </div>
                                                </div></a>
                                               
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li class="mainMenu_Blog"><a href="http://blog.designsforhealth.com/blog/">Blog</a></li>
                            </ul>
                            </div>
                            
                        </div>
                    </div>
                </div><!--headerWrap_outer Ends here--> 
                
                <div class="contentMainWrap_innerPage">
                	<div class="contentMainWrap">
                        <div class="innerpage_wrapp">
						
<div style="z-index: 9998;" class="left-menu-toggle">
<a href="javascript:void(0)" class="closed-view">
<img src="media/images/slide_menu.png" alt="Slide Menu"><span>Open Side Menu</span>
</a>
</div>
                        	<div class="innerpage_Lwrapp">
                        		<div class="leftmenu_links">
                                	<ul class="leftmenu_linksList">
                                    	<li>
                                        	<span><a href="aboutUs_Leadership.html">Leadership</a></span>
                                        </li>
                                        <li>
                                        	<span><a href="aboutUs_ScienceTeam.html">Science Team</a></span>
                                        </li>
                                        <li>
                                        	<span><a href="aboutUs_Philosophy.html">Philosophy</a></span>
                                        </li>
                                        <li class="selected_submenu">
                                        	<span><a href="aboutUs_Careers.html">Careers</a></span>
                                        </li>
                                          
                                    </ul>
                                </div>
                                <div class="leftCont_shopOnline">
                                	<a href="http://catalog.designsforhealth.com"  class="shopOnline_link">
                                	<div class="SO_imgWrap">
                                    	<img src="media/images/shopOnline_cart.png" alt="Shop Online" />
                                    </div>
                                    <div class="SO_descWrap">
                                    	<h3>Shop Online</h3>
                                        <p>Returning Patients and <br />Health Care Practitioners</p>
                                    </div>
                                </a>
                                </div>
                                <div class="NSF_wrap NSF_wrapBorder">
                                	<div class="NSF_header">
                                    	<h2>NSF GMP Registered</h2>
                                    </div>
                                	 <a href="QualityManufacturing_QualityandEfficacy_NSFCertification.html" class="NSF_link">
                                	<div class="NSF_imgWrap">
                                    	<img src="media/images/NSF_logo.png" alt="NSF" />
                                    </div>
                                    <div class="NSF_descWrap">
                                    	<p>Designs for Health, Inc., and<br /> its sister company Ashley-Martin <br />Manufacturing, LLC are NSF GMP <br />Registered.</p>
                                    </div>
                                    </a>
                                </div>                                 
                                <div class="leftContainer_emptySpace">
                                	<div class="blue_rightfold">
                                    	<img src="media/images/leftTab_rightBottom.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="innerpage_Rwrapp">
                                <div class="breadcrumWrap">
                                	<ul>
                                    	<li>
                                        	<a href="index.html">Home</a>
                                            <span class="breadcrumNImg"><img src="media/images/breadcrum_aroow.png" /></span>
                                        </li>
                                        <li>
                                        	<a href="aboutUs.html">About Us</a>
                                            <span class="breadcrumNImg"><img src="media/images/breadcrum_aroow.png" /></span>
                                        </li>
                                        <li>
                                        	<span class="currentPage_name">Careers</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pageContent">
                                	<span class="thankYou_message">
                                     <?php 
										if( $flag1 == "1" )
											{
												echo "Thank you for your time";
											}
										else
											{
												echo("Mail not sent please try after some time");
											}
									?>
								   </span>
                                   <div class="page_request_btn clearBoth_Fleft">
                                         <span class="innerLinkR_span">
                                            <a href="index.html" class="links_innerPage">Home Page</a>
                                         </span>  
                                         <span class="innerLink_span">
                                            <a href="aboutUs.html" class="links_innerPage">About DFH</a>
                                         </span> 
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--contentMainWrap_outer Ends here--> 
                            
                <div class="footerWrap_outer footerWrap_top">
                	<div class="footerWrap">
                    	<div class="footer_ListWrap footer_practice">
                        	<h3>Practice Development</h3>
                            <ul>
                            	<li><a href="PracticeDevelopment_PremierPlatform.html">Premier Platform</a></li>
                                <li><a href="PracticeDevelopment_PatientWorkShops.html">Patient Work Shops</a></li>
                                <li><a href="PracticeDevelopment_Testing.html">Testing</a></li>
                                <li><a href="PracticeDevelopment_NutritionistPlacementProgram.html">Nutritionist Placement Program</a></li>
                                 <!--<li><a href="PracticeDevelopment_CoreHealthPro.html">CoreHealthPro</a></li>-->
                                <li><a href="PracticeDevelopment_EHealthPro.html">EhealthPro</a></li>
                                <li><a href="PracticeDevelopment_dfhealth_estore.html">dfhealth-e-store</a></li>
                                <li><a href="PracticeDevelopment_Private_Label.html">Private Label</a></li>
                            </ul>
                        </div>                        
                        
                        <div class="footer_ListWrap footer_products">
                        	<h3>Professional Products</h3>
                            <ul>
                            	<li><a href="http://catalog.designsforhealth.com/Whats-New">What's New</a></li>
                                <li><a href="http://catalog.designsforhealth.com/Monthly-Specials">Monthly Specials</a></li>
                                <li><a href="http://catalog.designsforhealth.com/A-to-Z">A to Z</a></li>
                                <li><a href="http://catalog.designsforhealth.com/Condition-Specific-Index">Product Category Index</a></li>
                                <li><a href="http://catalog.designsforhealth.com/Nutrient-Classification-Index">Nutrient Classification Index</a></li>
                                <li><a href="http://catalog.designsforhealth.com/Accessories">Accessories</a></li>
                                <!--<li><a href="SitoMedica.html">SitoMedica</a></li>-->
                            </ul>
                            
                            <div class="footer_ListWrap footer_library">
                                <h3><a href="http://catalog.designsforhealth.com/library">Library</a></h3>
                            </div>
                            
                        </div>
                        
                        <div class="footer_ListWrap footer_ResearchQuality">
                            <div class="footer_ListWrap footer_research">
                                <h3>Research & Education</h3>
                                <ul>
                                    <li><a href="ResearchEducation_Events.html">Events</a></li>
                                    <li><a href="ResearchEducation_ClinicalRounds.html">Clinical Rounds</a></li>
                                    <li><a href="ResearchEducation_NutrientRoundtable.html">Nutrient Roundtable</a></li>
                                    <li><a href="ResearchEducation_EducationalWebinars.html">Educational Webinars</a></li>
                                </ul>
                            </div>                        
                            
                            <div class="footer_ListWrap footer_quality">
                                <h3>Quality & Manufacturing</h3>
                                <ul>
                                    <li><a href="QualityManufacturing_QualityandEfficacy.html">Quality and Efficacy</a></li>
                                    <li><a href="QualityManufacturing_WarehousingFulfillment.html">Warehousing & Fulfillment</a></li>
                                    <li><a href="QualityManufacturing_Manufacturing.html">Manufacturing</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="footer_ListWrap footer_help">
                        	<h3>Need Help?</h3>
                            
                            <div class="callNumber">
                            	<span class="callNumber_label">Call</span>
                                <span class="callNumber_value">1.800.847.8302</span>
                            </div>
                            
                             <div class="emailLink emailLink_footer">
                            	<a href="Need_Help.html">Submit your question/comment<br /> for a member of our team</a>
                            </div>
                            
                            <div class="socialLinks_footer">
                            	<ul>
                                	<li><span><a href="http://facebook.com/designsforhealth" target="_blank"><img src="media/images/facebook.png"/></a></span></li>
                                    <li><span><a href="http://twitter.com/#!/designs4health" target="_blank"><img src="media/images/twitter.png"/></a></span></li>
                                    <li><span><a href="http://www.linkedin.com/company/415888?trk=tyah" target="_blank"><img src="media/images/in.png"/></a></span></li>
                                </ul>
                            </div>
                            
                        </div>
                        
                        
                        
                    </div>
                </div><!--footerWrap_outer Ends here--> 
                
                <div class="footerWrap_outer footerWrap_bottom">
                	<div class="footerWrap">
                    	<div class="footerWrap_bottomLeft">
                        	<div class="footerBottomLinks">
                            	<ul>
                                	<li style="padding-left:0;"><a href="aboutUs.html">About Us</a></li>
                                    <li><a href="http://blog.designsforhealth.com/blog/">Blog</a></li>
                                    <li><a href="Privacy_Policy.html">Privacy Policy</a></li>
                                    <li><a href="CopyrightPolicy_Disclaimer.html">Copyright Policy & Disclaimer</a></li>
                                    <li style="background:none;"><a href="Sitemap.html">Sitemap</a></li>
                                </ul>
                            </div>
                            <p class="copyrightText">
                            	<span class="copyrightText_text">Copyright &copy; </span>
                                <span class="copyrightText_value">Designs for Health 2013</span>
                            </p>
                        </div>
                        <div class="footerWrap_bottomRight">
                        	<span class="poweredBy">
                            	<a target="_blank" href="http://www.colorcuboid.com/">
                                    <p>Powered by</p>
                                    <img src="media/images/colorcuboid.png" alt="colorcuboid.com">
                                    <p>ColorCuboid Designs</p>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                
            </div><!--fixed_wrapper_outer Ends here-->  
                       
	</div><!--dfh_main_wrapper Ends here-->

<div class="emailpop">
   <div class="emailpopbutton">
      
<link rel="stylesheet" type="text/css" href="media/styles/widgets.css" />
<script type="text/javascript" src="media/scripts/widgets.js"></script>
<script type="text/javascript">
HelpSpotWidget.Tab.show({ 
	// Nearly every aspect of the widget is customizable, complete documentation here:
	// http://www.helpspot.com/helpdesk/index.php?pg=kb.page&id=323
	host: 'http://dfh.ehclients.com',
	popup_border_color: '#FFF',
	popup_border_size: '0'
});
</script>
   
   </div>
   <div class="content_emailpop" style="width:360px;">
        <div class="content_emailpopHead">
            <span class="close_button">
                <img src="media/images/close.png" onclick="HelpSpotWidget.Tab.close();return false" alt="Close" />
            </span>
        </div>
        <div class="content_emailpopContent" id="helpSpot_container">
        	
        </div>
   </div>
</div>


<script type="text/javascript" src="media/scripts/jquery.tools.min.js"></script>
<script type="text/javascript" src="media/scripts/common_scripts.js"></script>
<script type="text/javascript">
	$(function() {
		
	});
</script>
<script type="text/javascript" src="media/scripts/two_coloumsHeight.js"></script>
<!-- Start of Async HubSpot Analytics Code -->
    <script type="text/javascript">
        (function(d,s,i,r) {
            if (d.getElementById(i)){return;}
            var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
            n.id=i;n.src='//js.hubspot.com/analytics/'+(Math.ceil(new Date()/r)*r)+'/141581.js';
            e.parentNode.insertBefore(n, e);
        })(document,"script","hs-analytics",300000);
    </script>
<!-- End of Async HubSpot Analytics Code -->
</body>
</html>
