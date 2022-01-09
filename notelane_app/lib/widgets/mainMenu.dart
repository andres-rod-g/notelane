// ignore_for_file: constant_identifier_names

import 'package:flutter/material.dart';
import 'General/images.dart';

class MainMenu extends StatelessWidget {
  static const COLOR_CLARO = Color(0xFFF7EBE8);
  static const COLOR_OSCURO = Color(0xFF1E1E24);
  static const COLOR_MARCADOS = Color(0xFFE54B4B);
  static const COLOR_DEBIL = Color(0xFF444140);
  static const COLOR_TRANSPARENTE = Color(0xFFE54B4B);

  const MainMenu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          decoration: BoxDecoration(
            color: COLOR_OSCURO
          ),
          child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                NLImage(40, 10,'assets/images/NLLogo.png'),
                Text(
                  'Notelane',
                  style: TextStyle(
                    fontSize: 25,
                    fontFamily: 'Sansation',
                    color: COLOR_CLARO
                  ),
                )
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                Text(
                  'Test',
                  style: TextStyle(
                    color: COLOR_CLARO
                  ),
                )
              ],
            )
          ],
        ),
        ),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}