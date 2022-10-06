import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio_website/models/Project.dart';
import 'package:portfolio_website/responsive.dart';
import '../../../constants.dart';
import 'dart:js' as js;

class ProjectCard extends StatelessWidget {
  const ProjectCard({
    Key? key,
    required this.project,
    /*required this.info*/
  }) : super(key: key);

  final Project project;
  //final Project info;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(defaultPadding),
      color: secondaryColor,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            project.title,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: GoogleFonts.sourceCodePro(
              textStyle: Theme.of(context).textTheme.subtitle1,
              fontWeight: FontWeight.bold,
            ),
          ),
          Spacer(),
          Text(
            project.description,
            maxLines: Responsive.isMobileLarge(context) ? 3 : 4,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(height: 1.5),
          ),
          Spacer(),
          TextButton(
            onPressed: () {
              js.context.callMethod('open', [project.link]);
            },
            child: Text(
              "Read More >>",
              style: TextStyle(color: primaryColor),
            ),
          ),
        ],
      ),
    );
  }
}
