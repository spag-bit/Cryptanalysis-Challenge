import binascii
import string
import base64
from subprocess import Popen, PIPE

def decodeBase64(encoded_string):
    decoded_bytes = base64.b64decode(encoded_string)
    decoded_base_64 = decoded_bytes.decode('utf-8')
    print(f'level 1: {decoded_base_64}')
    decoded_hex = base64ToHex(decoded_base_64)
    print(f'level 2: {decoded_hex}')
    # decoded_string = decipheringfunction(decoded_hex)
    return decoded_hex

def base64ToHex(hex_string):
    hex_string = hex_string.replace(" ","")
    ascii_string = binascii.unhexlify(hex_string).decode()
    return ascii_string

# This challenge has own encryption and descryption need to determine the 
def decipheringfunction(decoded_string):

    plaintext = plaintext.upper()
    key = bytes(key.upper(), "ascii")

    valid_chars = bytes(string.ascii_uppercase, "ascii")

    idx = 0
    ciphertext = ""

    for c in plaintext:
        if c not in valid_chars:
            ciphertext += chr(c)
        else:
            if key[idx] not in valid_chars:
                idx = (idx + 1) % len(key)
            v1 = c - ord("A")
            v2 = key[idx] - ord("A")
            ciphertext += chr(((v1 - v2) % 26) + ord("A"))
            idx = (idx + 1) % len(key)

    return ciphertext

fromJs = Popen(['node', 'challenge.js'], stdout=PIPE)
output = fromJs.stdout.read()
clear_string = output.decode('utf-8')

print(decodeBase64(clear_string))



