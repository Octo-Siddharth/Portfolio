import 'package:flutter/material.dart';
import 'package:portfolio_website/string.dart';
import 'package:portfolio_website/constants.dart';
import 'dart:js' as js;

import 'package:portfolio_website/constants.dart';

class MyInfo extends StatelessWidget {
  const MyInfo({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 1,
      child: Container(
        color: Color(0xFF242430),
        child: Column(
          children: [
            Spacer(flex : 2),
            CircleAvatar(
              radius: 50,
              backgroundImage: AssetImage("assets/images/dp.jpeg"),
            ),
            Spacer(),
            Text(
              "Siddhartha Rakshit",
              style: Theme.of(context).textTheme.subtitle1,
            ),
            Text(
              "ECE Engineer & Software Developer",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontWeight: FontWeight.w200,
                height: 1.5,
              ),
            ),
            Container(
              alignment: Alignment.center,
              margin: EdgeInsets.only(top: 4, left: 16, right: 16, bottom: 4),
              child: SelectableText(
                desc,
                textAlign: TextAlign.center,
                style: TextStyle(fontWeight: FontWeight.w200, height: 1.5),
              ),
            ),
            Container(
              margin: EdgeInsets.only(top: defaultPadding),
              alignment: Alignment.center,
              color: Color(0xFF24242E),
              child: SizedBox(
                width: 120,
                child: ElevatedButton(
                  onPressed: () {
                    js.context.callMethod('open', [LINK_GITHUB]);
                  },
                  child: Text("Follow Me"),
                  style: ElevatedButton.styleFrom(
                    primary: Color.fromARGB(255, 88, 219, 213),
                  ),
                )
              ),
            ),
            Spacer(flex: 2),
          ],
        ),
      ), 
    );
  }
}