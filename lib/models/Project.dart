class Project {
  final String title, description, link, lang;

  Project({required this.title, required this.description, required this.link, required this.lang});
}

const KOTLIN = "kotlin";
const DART = "dart";
const FLUTTER = "Flutter";
const SWIFT = "swift";
const ARDUINO = "Arduino";
const PYTHON = "Python";

List<Project> demo_projects = [
  Project(
    title: "IoT Enabled Automatic Access Control With COVID Detection",
    description: "A Smart IoT based device that can detect whether a person is a COVID Symptomatic or carrier or not. Uses IR based BPM , SpO2 and Temperature Sensor for detection",
    link: "https://link.springer.com/book/10.1007/978-981-16-5207-3?sap-outbound-id=6225DF43D31A92033451014551A4BFDB4D30D788",
    lang: "Ardunio",
  ),
  Project(
      title: "Tap the Piano Tiles Game",
      description:
          "A Flutter and Dart basesd responsive Piano Tile Game Application build for Android, IOS, Windows and Web.",
      link: "https://github.com/Octo-Siddharth/Tap-the-Piano-Tiles-Game",
      lang: "Flutter"),
      Project(
      title: "Retro Nokia Snake Game using Raspberry Pi Pico",
      description:
          "Very much inspired from the childhood memories, when we used to play The Snake Game in our good old nokia phones, I bet most of us scored a huge. So let's recall the some part of childhood with this project. It took a hell lot of time to design the movement of the snake.",
      link: "https://github.com/Octo-Siddharth/Retro-Nokia-Snake-Game-using-Raspberry-Pi-Pico",
      lang: "Python"),
      Project(
      title: "Dice Rolling Game Flutter Web Android IOS Application",
      description:
          "This is just a simple Dice Rolling Game app with custom splash screen. Built for both Android, Web and ios. Clone customize and learn.",
      link: "https://github.com/Octo-Siddharth/Dice-Rolling-Game-Flutter-Web-Android-IOS-Application",
      lang: "Flutter"),
];