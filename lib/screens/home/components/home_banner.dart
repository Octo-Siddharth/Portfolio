import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio_website/responsive.dart';
import 'package:portfolio_website/string.dart';
import '../../../constants.dart';
import 'dart:js' as js;

class HomeBanner extends StatelessWidget {
  const HomeBanner({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: Responsive.isMobile(context) ? 2.5 : 3,
      child: Stack(
        fit: StackFit.expand,
        children: [
          Image.asset(
            "assets/images/background.jpg",
            fit: BoxFit.cover,
          ),
          Container(color: darkColor.withOpacity(0.66)),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: defaultPadding),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Discover my Amazing \nWork Space!",
                  style: Responsive.isDesktop(context)
                      ? Theme.of(context).textTheme.headline3?.copyWith(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          )
                      : Theme.of(context).textTheme.headline5?.copyWith(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                ),
                if (Responsive.isMobileLarge(context))
                  const SizedBox(height: defaultPadding / 2),
                MyBuildAnimatedText(),
                SizedBox(height: defaultPadding),
                if (!Responsive.isMobileLarge(context))
                  ElevatedButton(
                    onPressed: () {
                      js.context.callMethod('open', [LINK_PROFILE_CARD]);
                    },
                    style: TextButton.styleFrom(
                      padding: EdgeInsets.symmetric(
                          horizontal: defaultPadding * 2,
                          vertical: defaultPadding),
                      backgroundColor: primaryColor,
                    ),
                    child: Text(
                      "EXPLORE NOW",
                      style: TextStyle(color: darkColor),
                    ),
                  ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

class MyBuildAnimatedText extends StatelessWidget {
  const MyBuildAnimatedText({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DefaultTextStyle(
      style: GoogleFonts.sourceCodePro(
          textStyle: Theme.of(context).textTheme.subtitle1!),
      maxLines: 1,
      child: Row(
        children: [
          if (!Responsive.isMobile(context)) FlutterCodedText(),
          if (!Responsive.isMobileLarge(context))
            SizedBox(width: defaultPadding / 2),
          Text("I Build "),
          Responsive.isMobile(context)
              ? Expanded(child: AnimatedText())
              : AnimatedText(),
          if (!Responsive.isMobileLarge(context))
            SizedBox(width: defaultPadding / 2),
          if (!Responsive.isMobileLarge(context)) FlutterCodedText(),
        ],
      ),
    );
  }
}

class AnimatedText extends StatelessWidget {
  const AnimatedText({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AnimatedTextKit(
      animatedTexts: [
        TyperAnimatedText(
          "responsive web and mobile applications UI.",
          speed: Duration(milliseconds: 60),
        ),
        TyperAnimatedText(
          "Web and Application Development.",
          speed: Duration(milliseconds: 60),
        ),
        TyperAnimatedText(
          "American Sign language Prediction ML application.",
          speed: Duration(milliseconds: 60),
        ),
        TyperAnimatedText(
          "electronics projects and hobbyist.",
          speed: Duration(milliseconds: 60),
        ),
      ],
    );
  }
}

class FlutterCodedText extends StatelessWidget {
  const FlutterCodedText({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text.rich(
      TextSpan(
        text: "<",
        children: [
          TextSpan(
            text: "flutter",
            style: TextStyle(color: primaryColor),
          ),
          TextSpan(text: ">"),
        ],
      ),
    );
  }
}
