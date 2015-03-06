var langStr = 'en';
var ucNewPrice = "$49.95";
var ucUpgradePrice = "$24.95";
var ueUcBundleNewPrice = "$89.95";      //new bundle cost
var ueUcBundleRetailPrice = "$109.90";   //bundle retail price
var ueUCBundleYouSavePercentage = "40% on UC";
var ueUcUpgradeBundlePrice = "$44.95";    // bundle upgrade price
var ueUpgradeToUeUcBundlePrice = "$59.95";
var strReminderText = 'Days Remaining:';

var strTopRightBlockContent = 
    '<p class="register_title">Register</p>' +
    '<p><img src="images/ucbox_sm.gif" alt="UltraCompare" border="0" class="ucbox" />Register for only: <span class="price" id="ucNewPrice">$##.##</span></p>' +
    '<a href="#" onClick="purchaseLink(\'BuyUC\', langStr); return false;" target="_blank"><p class="buy_button">BUY</p></a>' +
    '<p class="upgrade_text">Upgrade: <span class="price" id="ucUpgradePrice">$##.##</span></p>' +
    '<a href="#" onClick="purchaseLink(\'UpgradeUC\', langStr); return false;" target="_blank"><p class="upgrade_button">UPGRADE</p></a>';
                  
var strBottomRightBlockContent = 
    '<p class="register_title">UE/UC </p>' +
    '<p><img src="images/ue_uc_box.gif" alt="UltraEdit UltraCompare Bundle" border="0" class="bundlebox" />Register both for only: <span class="price" id="ueUcBundleNewPrice">$##.##</span></p>' +
    '<a href="#" onClick="purchaseLink(\'BuyUEUCBundle\', langStr); return false;" target="_blank"><p class="buy_button">BUY</p></a>'+
    '<p class="save_on_uc_text">Save 40% on UC!</p> ';

var strHeaderSubText= 
    '<h2>This is an unregistered program. </h2>' +
    '<p>You are using this application on a free trial basis. </p> ';
    
var strUpgradeReminderHeaderSubText = 
    '<h2>Your complimentary upgrade period has expired</h2> ' +
    '<p>Upgrade today, get another year of free upgrades, plus save 50%</p>';

var strStdTopHeadline = 'UltraCompare Trial Reminder';
var strHurryTopHeadline = 'Your Trial is Almost Over';
var strExpiredTopHeadline = 'Uh Oh... Your Trial Expired';
var strUpgradeReminderTopHeadline = 'License Renewal Reminder';

                          
// ----- DIALOG CONTENT ---------//     
var defaultContent =
'<h2>Thank You for Evaluating UltraCompare</h2>'+ 
'<p class="subtext">You are using this application on a free trial basis</p>'+ 
'<p>This is an unregistered copy of UltraCompare. If you continue use this program, please purchase a license. </p>'+ 
'<p><a href="http://www.ultraedit.com/redirects/registration/en/uc_register.html?utm_source=UltraCompare&utm_medium=ipm&utm_campaign=default" target="_blank">Click here to register</a></p>'+ 
'<p style="clear: all"><b>Visa, MasterCard, Amex accepted</b></p>'+ 
'<p>IDM Computer Solutions, Inc.<br />5559 Eureka Dr. Ste. B<br />Hamilton, OH ##.##<br />Fax: (513) 8##.##00<br />Email: <a href="mailto:idm@idmcomp.com" target="_blank">idm@idmcomp.com</a></p>'+ 
'<p><a href="http://www.ultraedit.com/company/contact_us.html?utm_source=ultracompare&utm_medium=ipm&utm_campaign=default" target="_blank">Contact us</a> for questions.</p>';
                     
var welcomeContent =
		'<h2>Thank You for Evaluating UltraCompare</h2>'+
		'<p>Maximize your productivity with the IDM user community resource center - including: support, downloads, news, and more...</p>'+
		'<div class="powertips">'+
		'<p><span class="resource_title">Power Tips/Tutorials</span><br />'+
		'"How-tos" for the latest application features, as well as in-depth tutorials on existing features.</p>'+
		'</div>'+
		'<div class="tech_support">'+
		'<p><span class="resource_title">Tech Support</span><br />'+
		'Got a question?  Get an answer!  Utilize your support resources  to make your use of IDM software easier.</p>'+
		'</div>'+
		'<div class="forums">'+
		'<p><span class="resource_title">User-to-user Forums</span><br />'+
		'Join the forums to meet/interact with many other IDM product enthusiasts - share a tip, get advice, and more.</p>'+
		'</div>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/resources.html\'); return false;" target="_blank">Visit the resource center</a></p>';
    
var textModeContent = 
    '<img src="images/text_compare_icon.jpg" alt="Text Compare" border="0" class="tip_screenshot" />'+
    '<h2>Text Compare</h2>'+
    '<p class="subtext">Compare text files, source code, Word Doc\'s...</p>'+
    '<p>UltraCompare supports 2 and 3 way comparison - great for version control, validating backups, and tracking your team\'s modifications.</p>' +
    '<p style="clear: both">The relational lines visually link differences between files so you can easily identify and merge differences between your files. ' +
    '<p>UltraCompare also higlights the individual character differences within the text making visual inspection of your file differences even faster.</p>';
    
    
var folderModeContent = 
    '<img src="images/folder_compare_icon.jpg" alt="Folder Compare" border="0" class="tip_screenshot" />'+
    '<h2>Folder Compare</h2>'+
    '<p class="subtext">Compare your folders, .zip archives, and more with Folder Mode</p>' +
    '<p>Use Folder mode to quickly compare local, network, or remote directories (using the built-in FTP/SFTP support). </p>'+
    '<p style="clear: both">Deep directory structures?  No problem... Folder mode is performance optimized for large directory structures allowing you to start working with the top-level folders while UltraCompare continues to process the subdirectories in the background.</p>'+
    '<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/recursive_compare.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var mergeContent = 
    '<img src="images/merge_icon.jpg" alt="Merge" border="0" class="tip_screenshot" />'+
    '<h2>Merge Differences</h2>'+
    '<p class="subtext">Merge differences with block and line mode merge</p>'+
    '<p>UltraCompare features powerful merge options that give you total control over the differences between your compared files.</p>'+
    '<p>UltraCompare Professional will save you hours with its powerful and intuitive merge features.  You can merge differences using the merge toolbar, the merge icons between compare panes, or by using the Merge menu options. </p>'+
    '<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/block_line_mode_merge.html\'); return false;" target="_blank">Click here to learn more</a></p>';
    
var benefitsContent = 
		'<h2>Benefits of Paid Registration</h2> '+
    '<div class="benefits"> '+
    '<p><span class="subtext">Unlimited Lifetime Support</span><br />'+
    'World class tech support - typical response time: 30 min or less.</p> '+
    '<p><span class="subtext">One Year of FREE Upgrades</span><br />'+
    'Registration entitles you to one year of complimentary upgrades which includes all major and minor releases.</p> '+
    '<p><span class="subtext">Community Benefits</span><br />'+
    'Over 2 million active users, rich online resources, power tips, user-driven development model, monthly newsletter, forums, and more... </p> '+
//    '<div class="bonus">       '+
//      '<p><span class="subtext">User-Based Licensing!</span><br />'+
//      'Have a laptop or an extra PC? Registration grants installation authority on multiple systems - provided you are the only person using the software.</p> '+
    '</div> '+
    '</div> <!-- end benefits -->';    
    
var editTextContent =
    '<img src="images/edit_text_icon.jpg" alt="Edit Text" border="0" class="tip_screenshot" />'+ 
    '<h2>Edit Text</h2>'+ 
    '<p class="subtext">Edit text directly in the compare panes</p>'+ 
    '<p style="clear: both">Sometimes you have to do more than merge the differences... You need to edit the file directly!  Editing text on the fly is essential to improving the efficiency of your workflow.</p>'+ 
    '<p>Text Compare offers two ways to directly edit your files: editing directly in the compare panes or editing in the active line window at the bottom of the application.  To edit in the pane directly, simply click in the pane, and type... it\'s that easy!</p>'+ 
    '<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/editing_files.html\'); return false;" target="_blank">Click here to learn more</a></p>';    

var sessionsContent =
    '<img src="images/sessions_icon.gif" alt="Sessions" border="0" class="tip_screenshot" />'+ 
    '<h2>Sessions</h2>'+ 
    '<p class="subtext">Manage multiple compare sets with Sessions</p>'+ 
    '<p>Opening multiple instances of any application makes it harder to work, so UltraCompare gives you sessions to simplify your compare operations!</p>'+ 
    '<p>Sessions allow you to work with multiple compare sets - regardless of mode - all within one application. The tabbed interface allows you to easily toggle between multiple sessions for easier and more intuitive compare operations.</p>'+ 
    '<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/ultracompare_sessions.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var webCompareContent = 
    '<img src="images/web_compare_icon.gif" alt="Web Compare" border="0" class="tip_screenshot" />'+ 
    '<h2>Compare Web Files</h2>'+ 
    '<p class="subtext">Compare local/remote files</p>'+ 
    '<p>If you work with web files, you are probably accustomed to downloading the file via FTP or viewing the source, saving the text, then doing a compare.</p>'+
    '<p style="padding-top: 3px">We\'re sure you\'ll agree - there must be an easier way to do this!</p> '+
    '<p>With Web Compare, just type the URL in the file path field and go...  it\'s that easy! Web compare eliminates the extra steps and imports the contents of the web file for a quick compare. </p> '+
    '<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/web_compare.html\'); return false;" target="_blank">Click here to learn more</a></p>';
    
var wordDocCompare = 
'<img src="images/word_compare.gif" alt="Word Compare" border="0" class="tip_screenshot" />'+ 
'<h2>Word Doc/RTF Compare</h2>'+ 
'<p class="subtext">Compare Word Docs and RTF files</p>'+ 
'<p>Have a Word Document that you\'re collaborating on with others? Easily track all changes between all parties with UltraCompare.</p>'+ 
'<p style="clear: both">UltraCompare Professional supports compare and merge operations for Microsoft Word Documents and RTF files. If you need to see what\'s been changed on your contracts, papers, and more...  then UltraCompare\'s Word Doc compare is what you\'re looking for!</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/word_doc_compare.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var folderModeFiltersContent = 
'<img src="images/folder_mode_filters_icon.gif" alt="Folder Mode Filters" border="0" class="tip_screenshot" />'+ 
'<h2>Filter Compare Results</h2>'+ 
'<p class="subtext">Simplify your compare results</p>'+ 
'<p>Comparing directory structures can be a daunting task especially when your directories contain large amounts of files/folders. </p>' +
'<p style="clear: both">In order to work efficiently with your result set, you may need to ignore specific file types/folders or only show a specific result such as "different files". </p>'+ 
'<p>UltraCompare provides several methods of filtering your results to give you a focused compare set.</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/filtering_files.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var compareProfilesContent = 
'<img src="images/profiles_icon.gif" alt="Profiles" border="0" class="tip_screenshot" />'+ 
'<h2>Compare Profiles</h2>'+ 
'<p class="subtext">Need to compare the same files and folders using specific settings?</p>'+ 
'<p>Store and re-use your compare settings with compare profiles.</p>'+ 
'<p style="clear: all">Compare profiles allow you to save compare settings and re-use them in the current session or future sessions. '+
'<p>Compare profiles allow you to save your settings by name, store ignore options, remember file and folder paths, and more. You can even import, export, and share your profiles with team members!</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/custom_user_profiles.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var ignoreOptionsContent = 
'<img src="images/ignore_options_icon.gif" alt="Profiles" border="0" class="tip_screenshot" />'+ 
'<h2>Text Ignore Options</h2>'+ 
'<p class="subtext">Ignore non-relevant text with configurable ignore options</p>'+ 
'<p>Many programmers need to compare the content of their source code but not the comments... Ignore Options allow you to do just that, and more!</p>'+ 
'<p>Do you have two files that are nearly identical except for differences in tabs, spaces, or line terminators? Ignore options allow you to compare the content of the files and ignore the whitespace differences.  Ignore Options can be used in a variety of ways for difference management.  </p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/ignore_options.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var shellIntegrationContent =
'<img src="images/shell_integration_icon.gif" alt="Shell Integration" border="0" class="tip_screenshot" />'+ 
'<h2>Shell Integration</h2>'+ 
'<p class="subtext">Quickly execute your file and folder compare operations from the right-click menu in Windows Explorer </p>'+ 
'<p style="clear: both">If you\'re constantly comparing files and directories, you need something that is fast, efficient, and easy to use.  UltraCompare streamlines your compare operations by direcly integrating with Windows Explorer through Shell Integration.</p>'+ 
'<p>Shell integration allows you to mark files in Windows Explorer then run your compare - all from the convenient right-click menu. </p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/ultracompare_shell_integration.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var ftpCompareContent = 
'<img src="images/compare_ftp_folders.gif" alt="FTP Compare" border="0" class="tip_screenshot" />'+ 
'<h2>FTP/SFTP Support - Remote File and Folder Compare</h2>'+ 
'<p class="subtext">Compare and sync remote files and folders with integrated FTP/SFTP support</p>'+ 
'<p>UltraCompare\'s FTP/SFTP directory compare allows you to access remote files and folders located on a server. Execute a directory compare and sync your remote files and directories with your local copies. Compare, merge, and save... it\'s that easy! </p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/compare_FTP_directories.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var favoriteFilesAndFoldersContent = 
'<img src="images/favorite_files_folders_icon.gif" alt="Favorites" border="0" class="tip_screenshot" />'+ 
'<h2>Favorite Files &amp; Folders</h2>'+ 
'<p class="subtext">Save commonly-used files and folders with Favorites</p>'+ 
'<p>Do you frequently compare the same set of files/folders? Then you need Favorites!</p>'+ 
'<p style="clear: both">Favorites are a convenient way to bookmark your commonly-used files and folders for fast retrieval during your compare operations. Just another way that UltraCompare makes your workflow easier and faster!</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/bookmark_favorite_files-folders_in_ultracompare.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var snippetCompareContent =
'<img src="images/compare_text_snippets_icon.gif" alt="Favorites" border="0" class="tip_screenshot" />'+ 
'<h2>Compare Text Snippets</h2>'+ 
'<p class="subtext">Compare text snippets without having to open/save files</p> '+
'<p>Simply copy/paste your text directly into the compare frame! </p>'+ 
'<p style="clear: both">You can copy and paste text from a variety of sources including emails, Word Documents, webpages, and more.  You\'ll love the text snippet compare, it will greatly enhance the efficiency of your text compare operations.</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/compare_code_snippets.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var archiveCompareContent =
'<img src="images/zip_archive_icon.gif" alt="Archive Compare" border="0" class="tip_screenshot" />'+ 
'<h2>Archive Compare</h2>'+ 
'<p class="subtext">Compare .zip, .jar, and .rar archives with archive compare</p>'+ 
'<p>Got archives?  UltraCompare\'s archive compare allows you to compare the contents of .zip, .rar, and Java .jar archives.</p>'+ 
'<p>Not only does the archive compare support the popular formats above, but it even supports password-protected .zip archives!</p>'+ 
'<p>Use the archive compare and examine differences between archives or folders on the file system.  And best of all... the archive compare feature is easy-to-use!</p>';

var browserViewContent =
'<img src="images/web_compare_icon.gif" alt="Web Compare" border="0" class="tip_screenshot" />'+ 
'<h2>HTML Browser View</h2>'+ 
'<p class="subtext">Visually inspect your code with an HTML preview</p>'+ 
'<p>If you compare/merge HTML files and need to see what the changes look like in the browser, then you\'ve come to the right place!'+ 
'<p style="clear: both; padding-top: 5px">UltraCompare supports an integrated browser view in the compare panes that allows you to preview the HTML rendered as you would see it in your web browser. Simply compare, merge and/or edit, then hit the browser view for a quick visual inspection of your changes.</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/visually_inspect_HTML.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var customColorsContent =
'<img src="images/custom_colors_icon.gif" alt="Custom Colors" border="0" class="tip_screenshot" />'+ 
'<h2>Custom Colors</h2>'+ 
'<p class="subtext">Customize the interface colors to suit your needs</p>'+ 
'<p>Want to customize the colors and theme UltraCompare uses? </p>'+ 
'<p style="clear: both">Designed with configurability in mind, UltraCompare allows you to easily customize the color scheme. Have a favorite color scheme? Accustomed to your own color settings? Configure the color scheme to suit your preferences! </p>'+ 
'<p>What\'s more, you can create and save multiple color schemes and switch between them with ease.</p> '+
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/customize_colors.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var quickDifferenceCheckContent =
'<img src="images/command_line_quick_diff.gif" alt="Custom Colors" border="0" class="tip_screenshot" />'+ 
'<h2>Command Line Quick Difference Check</h2>'+ 
'<p class="subtext">Perform a command line quick diff to compare your files without launching UltraCompare</p>'+ 
'<p style="clear: both">The Quick Difference checks your files to see if they are different without showing the GUI - making the compare ultra-fast!</p>'+ 
'<p>If you need to quickly check whether your files are different, without needing to see where the differences are, then this is one command you want in your arsenal!</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/quick_diff_check.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var manualAlignContent =
'<img src="images/manual_allign_icon.gif" alt="Manual Align" border="0" class="tip_screenshot" />'+ 
'<h2>Manual Align</h2>'+ 
'<p class="subtext">Manually match/sync the lines in your source files</p>'+ 
'<p>Sometimes your files contain similar data in completely different parts of the file and there is not a way for UC to "know" where to match these lines. Therefore, you need a way to manually sync the compare to "show" UltraComapre where "like" parts of the file are. Manually sync\'ing makes UC "smarter" in that it allows you to tell it where to sync similar lines. Simply right-click any two lines and sync to continue the compare from that point.</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/manual_sync.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var outputContent = 
'<img src="images/report_icon.gif" alt="Output" border="0" class="tip_screenshot" />'+ 
'<h2>Reporting</h2>'+ 
'<p class="subtext">Export and save output results in multiple formats</p>'+ 
'<p>Export and save your compare output in multiple formats: side by side, in context, and more...</p>'+ 
'<p style="clear: both">If you need to quickly see the number of differences between the files you are comparing, simply use the Difference Summary report.  If you need a more comprehensive report, you may want to generate a result file. You can configure the output format in the Options dialog.</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/export_save_text_compare_output.html\'); return false;" target="_blank">Click here to learn more</a></p>';

var configureTimeDateContent = 
'<img src="images/custom_date_format_icon.gif" alt="Custom Date Format" border="0" class="tip_screenshot" />'+ 
'<h2>Time and Date Display</h2>'+ 
'<p class="subtext">Customize the time and date display format</p>'+ 
'<p>When peforming a folder compare, you may not care to see the hour and minute details, rather you may just want to see the month/date.</p>'+ 
'<p>You shouldn\'t have to stop and think about the date/time format every time you run your compare, it should simply match your expectations - providing the exact level of detail that you need. UltraCompare allows you to customize the format of the date and time to match your specific needs. Just set it and forget it... it\'s that easy!</p>'+ 
'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/customize_time_date.html\'); return false;" target="_blank">Click here to learn more</a></p>';



// ----- END DIALOG CONTENT ---------//

// ---- START RIGHT/LEFT CONTENT ----//

var rightSideContent =
    '<img src="images/ue_uc_box_big.gif" alt="UltraEdit UltraCompare Bundle Box" border="0" class="ue_uc_box_big" />'+ 
		'<h2>UE/UC Bundle</h2>'+ 
		'<p class="ue_uc_bundle_offer">Retail: <span class="retail_price" id="ueUcBundleRetailPrice">$##.##</span><br />'+ 
			'You Pay: <span class="price" id="ueUcBundleNewPrice">$##.##</span><br />'+ 
			'You Save: <span class="you_save" id="ueUCBundleYouSavePercentage">40% on UC</span>'+ 
		'</p>'+ 
		'<p style="clear: both">UltraEdit and UltraCompare are fully integrated to give you a total text editing solution. Get the UE/UC solution now and save <span id="ueUCBundleYouSavePercentage"> 40% on UC</span>.</p>'+ 
	  '<div class="register_upgrade_container">'+ 
	    '<div class="best_value">BEST VALUE</div>'+ 
			'<div class="register">'+ 
				'<p class="register_text">Register Both <span class="price" id="ueUcBundleNewPrice">$##.##</span></p>'+ 
				'<a href="#" onClick="purchaseLink(\'BuyUEUCBundle\', langStr); return false;" target="_blank"><p class="buy_button">BUY</p></a>'+ 
			'</div>'+ 
			'<div class="upgrade">'+ 
				'<p class="register_text">UE Upgrade + UC <span class="price" id="ueUpgradeToUeUcBundlePrice">$##.##</span></p>'+ 
				'<a href="#" onClick="purchaseLink(\'UpgradeUE2UEUCBundle\', langStr); return false;" target="_blank"><p class="buy_button">UPGRADE</p></a>'+ 
		'</div>';

var leftSideContent =
    '<img src="images/ucbox_big.gif" alt="UltraEdit Box" border="0" class="ucbox_big" />'+ 
    '<h2>UltraCompare</h2>'+ 
    '<p>UltraCompare Pro is loaded with features that allow you to track and merge differences between files, folders, and .zip archives! </p>'+ 
    '<div class="bonus">'+ 
			'<p><span class="subtext">One Year of FREE Upgrades</span><br />'+
    	'Registration entitles you to one year of complimentary upgrades which includes all major/minor releases.</p> '+
    '</div>'+ 
    '<div class="register_upgrade_container">'+ 
    '<div class="register">'+ 
    '<p class="register_text">Register For <span class="price" id="ucNewPrice">$##.##</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'BuyUC\', langStr); return false;" target="_blank"><p class="buy_button">BUY</p></a>'+ 
    '</div>'+ 
    '<div class="upgrade">'+ 
    '<p class="register_text">UC Upgrade<span class="price" id="ucUpgradePrice">$##.##</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'UpgradeUC\', langStr); return false;" target="_blank"><p class="buy_button">UPGRADE</p></a>'+ 
    '</div>';


// ---- END RIGHT/LEFT CONTENT ----//



// ---- START RIGHT/LEFT CONTENT FOR UPGRADE REMINDER MESSAGE----//

var upgradeRightSideContent =
    '<img src="images/ue_uc_box_big.gif" alt="UltraEdit UltraCompare Bundle Box" border="0" class="ue_uc_box_big" />'+ 
		'<h2>UE/UC Bundle</h2>'+ 
		'<p class="ue_uc_bundle_offer">Upgrade both today for<br /> Only: <span class="price" id="ueUcUpgradeBundlePrice">$##.##</span></p>'+ 
		'<p style="clear: both">Using UltraEdit? Save an additional 20% when you upgrade UltraCompare and UltraEdit together, plus receive another year of free upgrades for both products.</p>'+ 
	  '<div class="register_upgrade_container">'+ 
			'<div class="register" style="height: 70px; background-image: url(images/best_value_arrow.gif); background-position: 100% 50%; background-repeat: no-repeat;">'+ 
				'<p style="padding-top: 23px; padding-left: 23px; font-weight: bold">BEST VALUE</p>'+ 
			'</div>'+ 
			'<div class="upgrade">'+ 
				'<p class="register_text">UE/UC Upgrade<span class="price" id="ueUcUpgradeBundlePrice">$##.##</span></p>'+ 
				'<a href="#" onClick="purchaseLink(\'UpgradeUEUCBundle\', langStr); return false;" target="_blank"><p class="buy_button">UPGRADE</p></a>'+ 
		'</div>';

var upgradeLeftSideContent =
    '<img src="images/ucbox_big.gif" alt="UltraEdit Box" border="0" class="ucbox_big" />'+ 
    '<h2>UltraCompare</h2>'+ 
    '<p>Want to learn about the newest features in UltraCompare?  <a href="#" onClick="openLink(\'http://www.ultraedit.com/products/ultracompare/new_feature_tour.html\'); return false;" target="_blank">See </a> what\'s new and improved since your last upgrade.</p>'+ 
    '<div class="bonus_upgrade">'+ 
      '<p><span class="subtext">Upgrade Plus... 1 Year of Upgrades!</span><br />'+ 
      'Upgrade to the latest version, plus receive 1 year of <b>free</b> upgrades including all major/minor releases</p>'+ 
    '</div>'+ 
    '<div class="register_upgrade_container">'+ 
    '<div class="register">'+ 
	    '<p style="text-align: left; padding-top: 4px; padding-left: 5px"><strong>Upgrade Pricing</strong><br>'+ 
	    'Registered users receive 50% off <br>retail price!</p>'+ 
    '</div>'+ 
    '<div class="upgrade">'+ 
    '<p class="register_text">UC Upgrade<span class="price" id="ucUpgradePrice">$##.##</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'UpgradeUC\', langStr); return false;" target="_blank"><p class="buy_button">UPGRADE</p></a>'+ 
    '</div>';


// ---- END RIGHT/LEFT CONTENT FOR UPGRADE REMINDER MESSAGE----//
