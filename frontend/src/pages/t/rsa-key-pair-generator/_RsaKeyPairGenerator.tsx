import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "src/components/tool/ToolContainer";
import ToolHead from "src/components/tool/ToolHead";
import ToolBody from "src/components/tool/ToolBody";
import ToolCardWrapper from "src/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "src/components/tool/ToolContentCardWrapper";
import RsaKeyPairGeneratorSkeleton from "src/pages/t/rsa-key-pair-generator/_RsaKeyPairGeneratorSkeleton";
import CopyButton from "src/components/ui/copy-button";
import { toast } from "src/components/ToastProvider";
import { Button } from "src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import { Textarea } from "src/components/ui/textarea";
import { Label } from "src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import ToolVideo from "src/components/tool/ToolVideo";
import AdBanner from "../../../components/banner/AdBanner";

const KEY_SIZES = [2048, 4096];

const RsaKeyPairGenerator: React.FC = () => {
  const [privateKey, setPrivateKey] = useState<string>("");
  const [publicKey, setPublicKey] = useState<string>("");
  const [keySize, setKeySize] = useState<number>(2048);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const generateKeys = useCallback(async () => {
    setLoading(true);
    toast.info(`Generating ${keySize}-bit RSA key pair...`);

    try {
      const keyPair = await window.crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: keySize,
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"]
      );

      const spki = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);
      const pkcs8 = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

      const publicKeyPem = spkiToPEM(spki);
      const privateKeyPem = pkcs8ToPEM(pkcs8);

      setPublicKey(publicKeyPem);
      setPrivateKey(privateKeyPem);

      toast.success("RSA key pair generated successfully!");
    } catch (error) {
      console.error("Key generation error:", error);
      toast.error("Failed to generate RSA key pair.");
    } finally {
      setLoading(false);
    }
  }, [keySize]);

  function arrayBufferToBase64(buffer: ArrayBuffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  function spkiToPEM(spki: ArrayBuffer) {
    const base64 = arrayBufferToBase64(spki);
    const pem = `-----BEGIN PUBLIC KEY-----\n${base64.replace(/(.{64})/g, "$1\n")}\n-----END PUBLIC KEY-----`;
    return pem;
  }

  function pkcs8ToPEM(pkcs8: ArrayBuffer) {
    const base64 = arrayBufferToBase64(pkcs8);
    const pem = `-----BEGIN PRIVATE KEY-----\n${base64.replace(/(.{64})/g, "$1\n")}\n-----END PRIVATE KEY-----`;
    return pem;
  }

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="RSA Key Pair Generator"
        description="Generate secure RSA public and private key pairs for encryption, decryption, and digital signatures. Choose your key size and generate keys instantly in your browser."
      />

      {!loaded ? (
        <RsaKeyPairGeneratorSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle>Generate RSA Key Pair</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Key Size (bits)</Label>
                    <Select
                      value={keySize.toString()}
                      onValueChange={(value) => setKeySize(parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {KEY_SIZES.map((size) => (
                          <SelectItem key={size} value={size.toString()}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      4096 bits is recommended for higher security.
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button onClick={generateKeys} disabled={loading} className="w-full">
                      {loading ? "Generating..." : "Generate Keys"}
                    </Button>
                  </div>
                </div>

                {(publicKey || privateKey) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {publicKey && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="publicKey">Public Key</Label>
                          <CopyButton text={publicKey} />
                        </div>
                        <Textarea
                          id="publicKey"
                          value={publicKey}
                          readOnly
                          className="h-64 font-mono"
                        />
                      </div>
                    )}

                    {privateKey && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="privateKey">Private Key</Label>
                          <CopyButton text={privateKey} />
                        </div>
                        <Textarea
                          id="privateKey"
                          value={privateKey}
                          readOnly
                          className="h-64 font-mono"
                        />
                      </div>
                    )}
                  </div>
                )}

                {privateKey && (
                  <div className="p-3 bg-yellow-50 text-center dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      ⚠️ Keep your private key secret. Do not share it with anyone.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          <ToolContentCardWrapper>
            <ToolVideo
              title="How RSA Encryption Works"
              description="A visual explanation of the RSA algorithm, demonstrating how public and private keys are used for secure communication."
              videoUrl="https://www.youtube.com/embed/qph77bTKJTM"
            />
            <Card>
              <CardHeader>
                <CardTitle>About RSA Key Pairs</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 dark:text-slate-400 space-y-4">
                <p>
                  An RSA key pair consists of a public key and a private key. These keys are mathematically linked and are used in asymmetric cryptography. The public key can be shared freely, while the private key must be kept secret.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><b>Encryption:</b> Data encrypted with the public key can only be decrypted with the corresponding private key.</li>
                  <li><b>Digital Signatures:</b> A message signed with a private key can be verified by anyone who has the public key, proving the message's authenticity and integrity.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>The Technology Behind RSA</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 dark:text-slate-400 space-y-4">
                <p>
                  RSA (Rivest–Shamir–Adleman) is one of the first public-key cryptosystems and is widely used for secure data transmission. The security of RSA relies on the practical difficulty of factoring the product of two large prime numbers, the "factoring problem".
                </p>
                <p>
                  The key generation process involves selecting two distinct large random prime numbers and multiplying them to create a public modulus. The keys also have a public exponent and a private exponent, which are related through modular arithmetic. Breaking RSA encryption is computationally difficult, as it requires factoring this large modulus, a task for which there is no known efficient algorithm for classical computers.
                </p>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Applications of RSA</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><b>SSL/TLS Certificates:</b> Securing web traffic (HTTPS).</li>
                  <li><b>Email Encryption:</b> Used in protocols like PGP and S/MIME to secure email communications.</li>
                  <li><b>Digital Signatures:</b> Verifying the authenticity of documents and software.</li>
                  <li><b>Secure Shell (SSH):</b> Authenticating users to servers without sending a password over the network.</li>
                </ul>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default RsaKeyPairGenerator;