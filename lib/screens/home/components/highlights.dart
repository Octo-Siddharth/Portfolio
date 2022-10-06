/*import 'package:flutter/material.dart';
import 'package:portfolio_website/components/animated_counter.dart';
import 'package:portfolio_website/responsive.dart';

import '../../../constants.dart';
import 'high_light.dart';

class HighLightsInfo extends StatelessWidget {
  const HighLightsInfo({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: defaultPadding),
      child: Responsive.isMobileLarge(context),
          ? Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Highlight(
                    counter: AnimatedCounter(
                      value: 10, 
                      text: "+"
                    ),
                    label: "Projects", 
                  ),
                  Highlight(
                    counter: AnimatedCounter(
                      value: 10,
                    ),
                    label: "Stars",
                  )
                ],
              )
            ],
          )
    );
  }
}*/