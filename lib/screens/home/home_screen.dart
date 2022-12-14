import 'package:flutter/material.dart';
import 'package:portfolio_website/screens/main/main_screen.dart';

//import 'components/highlights.dart';
import 'components/home_banner.dart';
import 'components/project_card.dart';
import 'components/my_projects.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MainScreen(
      children: [
        HomeBanner(),
        //HighlightsInfo(),
        MyProjects(),
      ],
    );
  }
}