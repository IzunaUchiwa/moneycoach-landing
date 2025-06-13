// Flutter entry point
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'pages/login.dart';

void main() {
  runApp(const MoneyCoachApp());
}

class MoneyCoachApp extends StatelessWidget {
  const MoneyCoachApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [Locale('fr'), Locale('ar')],
      home: const LoginPage(),
    );
  }
}
