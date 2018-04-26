export function render(data) {
  return `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="utf-8"><!-- utf-8 works for most cases --><meta name="viewport" content="width=device-width"><!-- Forcing initial-scale shouldn't be necessary --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Use the latest (edge) version of IE rendering engine --><meta name="x-apple-disable-message-reformatting"><!-- Disable auto-scale in iOS 10 Mail entirely --><title>Initiate signup</title><!-- The title tag shows in email notifications, like Android 4.4. --><!-- CSS Reset : BEGIN --><style>@media only screen and (min-device-width:375px) and (max-device-width:413px){.email-container{min-width:375px!important}}</style><!-- CSS Reset : END --><!-- Progressive Enhancements : BEGIN --><style>@media screen and (max-width:560px){body{padding:0!important}.container{padding:0!important}.email-container{width:100%!important;margin:auto!important}.fluid{max-width:100%!important;height:auto!important;margin-left:auto!important;margin-right:auto!important}.stack-column,.stack-column-center{display:block!important;width:100%!important;max-width:100%!important;direction:ltr!important}.stack-column-center{text-align:center!important}.center-on-narrow{text-align:center!important;display:block!important;margin-left:auto!important;margin-right:auto!important;float:none!important}table.center-on-narrow{display:inline-block!important}.email-container p{font-size:17px!important;line-height:22px!important}}</style><!-- Progressive Enhancements : END --><!-- What it does: Makes background images in 72ppi Outlook render at correct size. --><!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]--></head><body width="100%" bgcolor="#fbfbfb" style="margin:0;padding:0;mso-line-height-rule:exactly"><center style="width:100%;background:#fbfbfb;text-align:left;padding:60px 0" class="container" data-parsed=""><table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="560" style="margin:auto" class="email-container float-center"><tr><td bgcolor="transparent" align="center"><img src="http://mypizzapie.com/email/MPP_header_NL.png" width="560" height="" alt="My Pizza Pie" border="0" align="center" style="width:100%;max-width:767px;height:auto;background:#fff;font-family:sans-serif;font-size:15px;line-height:20px;color:#555;margin:auto" class="g-img"></td></tr><tr><td bgcolor="#ffffff" style="padding:20px;text-align:center"></td></tr><!-- begin --><tr><td bgcolor="#ffffff" style="padding:0 20px 20px;font-family:sans-serif;font-size:17px;line-height:30px;color:#111;text-align:left;font-weight:300"><p style="margin:0">Hello, ${ data.name }</p></td></tr><tr><td bgcolor="#ffffff" style="padding:0 20px 40px;font-family:sans-serif;font-size:17px;line-height:30px;color:#111;text-align:left;font-weight:300"><p style="margin:0">Please confirm your email address to get access to the Contributor Account at mypizzapie.io by putting verification code: <b>{{{CODE}}}</b>, or by clicking on the link below</p></td></tr><tr><td bgcolor="#ffffff" style="padding:0 20px 40px;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:20px;color:#555"><table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:auto"><tr><td style="border-radius:3px;background:#222;text-align:center" class="button-td"><a href="${ data.link }" style="background:#DA0812;border:12px solid #DA0812;font-family:Helvetica,Arial,sans-serif;font-size:17px;line-height:20px;text-align:center;text-decoration:none;display:block;border-radius:4px;font-weight:700" class="button-a">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#fff">Verify Email Address</span>&nbsp;&nbsp;&nbsp;&nbsp;</a></td></tr></table></td></tr><tr><td bgcolor="#ffffff" style="padding:0 20px 40px;font-family:sans-serif;font-size:17px;line-height:30px;color:#111;text-align:left;font-weight:300"><p style="margin:0">If you did not sign up for this account you can ignore this email and the account will be deleted.</p></td></tr><tr><td bgcolor="#ffffff" style="padding:0 20px 20px;font-family:sans-serif;font-size:13px;line-height:22px;color:#111;text-align:left;font-weight:300"><p style="margin:0">Thank You,<br>My Pizza Pie Team</p></td></tr><!-- end --><tr><td bgcolor="#ffffff" style="padding:0 35px;font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#111"><hr style="margin:0;border:1px solid #e0e0e0;border-top:0"></td></tr><tr><td bgcolor="#ffffff" style="padding:30px 20px 30px;font-family:Helvetica,Arial,sans-serif;font-size:17px;line-height:27px;color:#111;text-align:center;font-weight:400"><h5 style="margin:0;text-align:center;color:#111;font-family:Helvetica,Arial,sans-serif;font-size:17px;line-height:27px;font-weight:400">Have a question?</h5><a style="display:block;text-decoration:none;text-align:center;color:#0080ff;font-family:Helvetica,Arial,sans-serif;font-size:17px;line-height:27px;font-weight:400" href="mailto:info@mypizzapie.io">info@mypizzapie.io</a></td></tr></table><table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="560" style="margin:auto" class="email-container float-center"><!-- 3 Even Columns : BEGIN --><tr><td bgcolor="#13A438" align="center" valign="top" style="padding:50px 10px 50px"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-left:15px"><tr><!-- Column : BEGIN --><td width="14.2%" class="social"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="text-align:center"><a href="https://t.me/joinchat/CucAN1BTnZyQckwHkTuTng"><img src="https://s3.eu-west-2.amazonaws.com/jincor-ico/email-assets/telegram.png" width="50" height="50" alt="alt_text" border="0" class="fluid" style="height:auto;background:0 0;font-family:sans-serif;font-size:15px;line-height:20px;color:transparent"></a></td></tr></table></td><!-- Column : END --><!-- Column : BEGIN --><td width="14.2%" class="social"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="text-align:center"><a href="https://twitter.com/MyPizzaPie_io"><img src="https://s3.eu-west-2.amazonaws.com/jincor-ico/email-assets/twitter.png" width="50" height="50" alt="alt_text" border="0" class="fluid" style="height:auto;background:0 0;font-family:sans-serif;font-size:15px;line-height:20px;color:transparent"></a></td></tr></table></td><!-- Column : END --><!-- Column : BEGIN --><td width="14.2%" class="social"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="text-align:center"><a href="https://www.reddit.com/r/MyPizzaPie/"><img src="https://s3.eu-west-2.amazonaws.com/jincor-ico/email-assets/reddit.png" width="50" height="50" alt="alt_text" border="0" class="fluid" style="height:auto;background:0 0;font-family:sans-serif;font-size:15px;line-height:20px;color:transparent"></a></td></tr></table></td><!-- Column : END --><!-- Column : BEGIN --><td width="14.2%" class="social"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="text-align:center"><a href="https://blog.mypizzapie.io"><img src="https://s3.eu-west-2.amazonaws.com/jincor-ico/email-assets/medium.png" width="50" height="50" alt="alt_text" border="0" class="fluid" style="height:auto;background:0 0;font-family:sans-serif;font-size:15px;line-height:20px;color:transparent"></a></td></tr></table></td><!-- Column : END --><!-- Column : BEGIN --><td width="14.2%" class="social"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="text-align:center"><a href="https://www.facebook.com/mypizzapie"><img src="https://s3.eu-west-2.amazonaws.com/jincor-ico/email-assets/facebook.png" width="50" height="50" alt="alt_text" border="0" class="fluid" style="height:auto;background:0 0;font-family:sans-serif;font-size:15px;line-height:20px;color:transparent"></a></td></tr></table></td><!-- Column : END --><!-- Column : BEGIN --><td width="14.2%" class="social"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="text-align:center"><a href="https://www.instagram.com/my_pizza_pie/"><img src="https://s3.eu-west-2.amazonaws.com/jincor-ico/email-assets/instagram.png" width="50" height="50" alt="alt_text" border="0" class="fluid" style="height:auto;background:0 0;font-family:sans-serif;font-size:15px;line-height:20px;color:transparent"></a></td></tr></table></td><!-- Column : END --><!-- Column : BEGIN --><td width="14.2%" class="social"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="text-align:center"><a href="https://github.com/mypizzapie"><img src="https://s3.eu-west-2.amazonaws.com/jincor-ico/email-assets/github.png" width="50" height="50" alt="alt_text" border="0" class="fluid" style="height:auto;background:0 0;font-family:sans-serif;font-size:15px;line-height:20px;color:transparent"></a></td></tr></table></td><!-- Column : END --></tr></table></td></tr><!-- 3 Even Columns : END --></table></center></body></html>`;
}
