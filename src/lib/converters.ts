// Text <-> ArrayBuffer conversion
export const stringToBuffer = (str: string): ArrayBuffer => {
    return new TextEncoder().encode(str);
};

export const bufferToString = (buffer: ArrayBuffer): string => {
    return new TextDecoder().decode(buffer);
};

// Base64 URL-safe encoding
export const base64ToBuffer = (base64: string): ArrayBuffer => {
    const binaryString = atob(base64.replace(/-/g, '+').replace(/_/g, '/'));
    const bytes = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
};

export const bufferToBase64 = (buffer: ArrayBuffer): string => {
    const bytes = new Uint8Array(buffer);
    const binaryString = String.fromCharCode(...bytes);
    return btoa(binaryString)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
};