import 'package:flutter/material.dart';

class NLImage extends StatelessWidget {
  final double _imageSize;
  final String _imageRoute;
  final double _margin;

  // ignore: use_key_in_widget_constructors
  const NLImage(this._imageSize, this._margin, this._imageRoute);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(
        left: _margin,
        right: _margin,
        top: _margin,
        bottom: _margin
      ),
      constraints: BoxConstraints(
        maxHeight: _imageSize,
        maxWidth: _imageSize
      ),
      decoration: const BoxDecoration(
        boxShadow: [
          BoxShadow(
            blurRadius: 10,
            color: Color(0x80000000)
          )
        ]
      ),
      child: Image.asset(_imageRoute),
    );
  }
}