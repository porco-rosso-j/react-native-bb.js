// WARNING: FILE CODE GENERATED BY BINDGEN UTILITY. DO NOT EDIT!
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BufferDeserializer,
  NumberDeserializer,
  VectorDeserializer,
  BoolDeserializer,
  StringDeserializer,
  serializeBufferable,
  OutputType
} from '../serialize/index.js';
import { Fr, Fq, Point, Buffer32, Buffer128, Ptr } from '../types/index.js';
import { NativeModules } from 'react-native';
const { BBSwift } = NativeModules;

export class BarretenbergApiSync {
  pedersenCommit(inputsBuffer: Fr[]): Point {
    const inArgs = inputsBuffer.map(serializeBufferable).flat();

    const resultArray = BBSwift.pedersenCommit(inArgs);

    if (!resultArray) {
      throw new Error('pedersenCommit returned null or encountered an error');
    }

    const resultBuffer = Buffer.from(resultArray);

    return Point.fromBuffer(resultBuffer);
  }

  pedersenHash(inputsBuffer: Fr[], hashIndex: number): Fr {
    const inArgs = [inputsBuffer].map(serializeBufferable);
    const resultBuffer = BBSwift.pedersenHash(inArgs);

    if (!resultBuffer) {
      throw new Error('pedersenHash returned null');
    }

    return Fr.fromBuffer(resultBuffer);
  }

  pedersenHashes(inputsBuffer: Fr[], hashIndex: number): Fr {
    throw new Error('pedersenHashes not supported');
  }

  pedersenHashBuffer(inputBuffer: Uint8Array, hashIndex: number): Fr {
    throw new Error('pedersenHashBuffer not supported');
  }

  poseidon2Hash(inputsBuffer: Fr[]): Fr {
    const inArgs = [inputsBuffer].map(serializeBufferable);
    const resultBuffer = BBSwift.poseidon2Hash(inArgs);

    if (!resultBuffer) {
      throw new Error('poseidon2Hash returned null');
    }

    return Fr.fromBuffer(resultBuffer);
  }

  poseidon2Hashes(inputsBuffer: Fr[]): Fr {
    throw new Error('poseidon2Hashes not supported');
  }

  poseidon2Permutation(inputsBuffer: Fr[]): Fr[] {
    throw new Error('poseidon2Permutation not supported');
  }

  blake2s(data: Uint8Array): Buffer32 {
    throw new Error('blake2s not supported');
  }

  blake2sToField(data: Uint8Array): Fr {
    throw new Error('blake2sToField not supported');
  }

  schnorrComputePublicKey(privateKey: Fr): Point {
    throw new Error('schnorrComputePublicKey not supported');
  }

  schnorrNegatePublicKey(publicKeyBuffer: Point): Point {
    throw new Error('schnorrNegatePublicKey not supported');
  }

  schnorrConstructSignature(
    message: Uint8Array,
    privateKey: Fr
  ): [Buffer32, Buffer32] {
    throw new Error('schnorrConstructSignature not supported');
  }

  schnorrVerifySignature(
    message: Uint8Array,
    pubKey: Point,
    sigS: Buffer32,
    sigE: Buffer32
  ): boolean {
    throw new Error('schnorrVerifySignature not supported');
  }

  schnorrMultisigCreateMultisigPublicKey(privateKey: Fq): Buffer128 {
    throw new Error('schnorrMultisigCreateMultisigPublicKey not supported');
  }

  schnorrMultisigValidateAndCombineSignerPubkeys(
    signerPubkeyBuf: Buffer128[]
  ): [Point, boolean] {
    throw new Error(
      'schnorrMultisigValidateAndCombineSignerPubkeys not supported'
    );
  }

  schnorrMultisigConstructSignatureRound1(): [Buffer128, Buffer128] {
    throw new Error('schnorrMultisigConstructSignatureRound1 not supported');
  }

  schnorrMultisigConstructSignatureRound2(
    message: Uint8Array,
    privateKey: Fq,
    signerRoundOnePrivateBuf: Buffer128,
    signerPubkeysBuf: Buffer128[],
    roundOnePublicBuf: Buffer128[]
  ): [Fq, boolean] {
    throw new Error('schnorrMultisigConstructSignatureRound2 not supported');
  }

  schnorrMultisigCombineSignatures(
    message: Uint8Array,
    signerPubkeysBuf: Buffer128[],
    roundOneBuf: Buffer128[],
    roundTwoBuf: Fq[]
  ): [Buffer32, Buffer32, boolean] {
    throw new Error('schnorrMultisigCombineSignatures not supported');
  }

  aesEncryptBufferCbc(
    input: Uint8Array,
    iv: Uint8Array,
    key: Uint8Array,
    length: number
  ): Uint8Array {
    throw new Error('aesEncryptBufferCbc not supported');
  }

  aesDecryptBufferCbc(
    input: Uint8Array,
    iv: Uint8Array,
    key: Uint8Array,
    length: number
  ): Uint8Array {
    throw new Error('aesDecryptBufferCbc not supported');
  }

  srsInitSrs(
    pointsBuf: Uint8Array,
    numPoints: number,
    g2PointBuf: Uint8Array
  ): void {
    throw new Error('srsInitSrs not supported');
  }

  srsInitGrumpkinSrs(pointsBuf: Uint8Array, numPoints: number): void {
    throw new Error('srsInitGrumpkinSrs not supported');
  }

  examplesSimpleCreateAndVerifyProof(): boolean {
    throw new Error('examplesSimpleCreateAndVerifyProof not supported');
  }

  testThreads(threads: number, iterations: number): number {
    throw new Error('testThreads not supported');
  }

  commonInitSlabAllocator(circuitSize: number): void {
    throw new Error('commonInitSlabAllocator not supported');
  }

  acirGetCircuitSizes(
    constraintSystemBuf: Uint8Array,
    honkRecursion: boolean
  ): [number, number, number] {
    throw new Error('acirGetCircuitSizes not supported');
  }

  acirNewAcirComposer(sizeHint: number): Ptr {
    throw new Error('acirNewAcirComposer not supported');
  }

  acirDeleteAcirComposer(acirComposerPtr: Ptr): void {
    throw new Error('acirDeleteAcirComposer not supported');
  }

  acirCreateCircuit(
    acirComposerPtr: Ptr,
    constraintSystemBuf: Uint8Array,
    sizeHint: number
  ): void {
    throw new Error('acirCreateCircuit not supported');
  }

  acirInitProvingKey(
    acirComposerPtr: Ptr,
    constraintSystemBuf: Uint8Array
  ): void {
    throw new Error('acirInitProvingKey not supported');
  }

  acirCreateProof(
    acirComposerPtr: Ptr,
    constraintSystemBuf: Uint8Array,
    witnessBuf: Uint8Array
  ): Uint8Array {
    throw new Error('acirCreateProof not supported');
  }

  acirProveAndVerifyUltraHonk(
    constraintSystemBuf: Uint8Array,
    witnessBuf: Uint8Array
  ): boolean {
    throw new Error('acirProveAndVerifyUltraHonk not supported');
  }

  acirProveAndVerifyMegaHonk(
    constraintSystemBuf: Uint8Array,
    witnessBuf: Uint8Array
  ): boolean {
    throw new Error('acirProveAndVerifyMegaHonk not supported');
  }

  acirFoldAndVerifyProgramStack(
    constraintSystemBuf: Uint8Array,
    witnessBuf: Uint8Array
  ): boolean {
    throw new Error('acirFoldAndVerifyProgramStack not supported');
  }

  acirLoadVerificationKey(acirComposerPtr: Ptr, vkBuf: Uint8Array): void {
    throw new Error('acirLoadVerificationKey not supported');
  }

  acirInitVerificationKey(acirComposerPtr: Ptr): void {
    throw new Error('acirInitVerificationKey not supported');
  }

  acirGetVerificationKey(acirComposerPtr: Ptr): Uint8Array {
    throw new Error('acirGetVerificationKey not supported');
  }

  acirGetProvingKey(acirComposerPtr: Ptr, acirVec: Uint8Array): Uint8Array {
    throw new Error('acirGetProvingKey not supported');
  }

  acirVerifyProof(acirComposerPtr: Ptr, proofBuf: Uint8Array): boolean {
    throw new Error('acirVerifyProof not supported');
  }

  acirGetSolidityVerifier(acirComposerPtr: Ptr): string {
    throw new Error('acirGetSolidityVerifier not supported');
  }

  acirSerializeProofIntoFields(
    acirComposerPtr: Ptr,
    proofBuf: Uint8Array,
    numInnerPublicInputs: number
  ): Fr[] {
    throw new Error('acirSerializeProofIntoFields not supported');
  }

  acirSerializeVerificationKeyIntoFields(acirComposerPtr: Ptr): [Fr[], Fr] {
    throw new Error('acirSerializeVerificationKeyIntoFields not supported');
  }

  acirProveUltraHonk(acirVec: Uint8Array, witnessVec: Uint8Array): Uint8Array {
    throw new Error('acirProveUltraHonk not supported');
  }

  acirVerifyUltraHonk(proofBuf: Uint8Array, vkBuf: Uint8Array): boolean {
    throw new Error('acirVerifyUltraHonk not supported');
  }

  acirWriteVkUltraHonk(acirVec: Uint8Array): Uint8Array {
    throw new Error('acirWriteVkUltraHonk not supported');
  }

  acirProofAsFieldsUltraHonk(proofBuf: Uint8Array): Fr[] {
    throw new Error('acirProofAsFieldsUltraHonk not supported');
  }

  acirVkAsFieldsUltraHonk(vkBuf: Uint8Array): Fr[] {
    throw new Error('acirVkAsFieldsUltraHonk not supported');
  }
}
