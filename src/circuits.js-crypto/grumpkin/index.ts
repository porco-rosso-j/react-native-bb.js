// @ts-ignore
import { Fr, type GrumpkinScalar, Point } from '@aztec/foundation/fields';
import { NativeModules } from 'react-native';
const { BBSwift } = NativeModules;

/**
 * Grumpkin elliptic curve operations.
 */
export class Grumpkin {

  // prettier-ignore
  static generator = Point.fromBuffer(Buffer.from([
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xcf, 0x13, 0x5e, 0x75, 0x06, 0xa4, 0x5d, 0x63,
    0x2d, 0x27, 0x0d, 0x45, 0xf1, 0x18, 0x12, 0x94, 0x83, 0x3f, 0xc4, 0x8d, 0x82, 0x3f, 0x27, 0x2c,
  ]));

  /**
   * Point generator
   * @returns The generator for the curve.
   */
  public generator(): Point {
    return Grumpkin.generator;
  }

  /**
   * Multiplies a point by a scalar (adds the point `scalar` amount of times).
   * @param point - Point to multiply.
   * @param scalar - Scalar to multiply by.
   * @returns Result of the multiplication.
   */
  public mul(point: Point, scalar: GrumpkinScalar): Point {
    const result = BBSwift.eccGrumpkinMul(point, scalar);
    if (!result) {
      throw new Error('eccGrumpkinMul returned null or encountered an error');
    }
    return Point.fromBuffer(Buffer.from(result));
  }

  /**
   * Add two points.
   * @param a - Point a in the addition
   * @param b - Point b to add to a
   * @returns Result of the addition.
   */
  public add(a: Point, b: Point): Point {
    const result = BBSwift.eccGrumpkinAdd(a, b);
    if (!result) {
      throw new Error('eccGrumpkinMul returned null or encountered an error');
    }
    return Point.fromBuffer(Buffer.from(result));
  }

  /**
   * Multiplies a set of points by a scalar.
   * @param points - Points to multiply.
   * @param scalar - Scalar to multiply by.
   * @returns Points multiplied by the scalar.
   */
  public batchMul(points: Point[], scalar: GrumpkinScalar) {
    throw new Error('batchMul not supported');
  }

  /**
   * Gets a random field element.
   * @returns Random field element.
   */
  public getRandomFr(): Fr {
    throw new Error('getRandomFr not supported');
  }

  /**
   * Converts a 512 bits long buffer to a field.
   * @param uint512Buf - The buffer to convert.
   * @returns Buffer representation of the field element.
   */
  public reduce512BufferToFr(uint512Buf: Buffer): Fr {
    throw new Error('reduce512BufferToFr not supported');
  }
}
