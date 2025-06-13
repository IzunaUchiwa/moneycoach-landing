import 'package:flutter/material.dart';

class OnboardingPage extends StatefulWidget {
  const OnboardingPage({super.key});

  @override
  State<OnboardingPage> createState() => _OnboardingPageState();
}

class _OnboardingPageState extends State<OnboardingPage> {
  int step = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Step ${step + 1}')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Onboarding step ${step + 1}'),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                if (step < 4) {
                  setState(() => step++);
                }
              },
              child: Text(step == 4 ? 'Finish' : 'Next'),
            ),
          ],
        ),
      ),
    );
  }
}
