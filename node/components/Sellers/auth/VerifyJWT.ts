import jwt from "jsonwebtoken";

class VerifyJWT {
    verify (token: string, SECRET : string) {
        jwt.verify(token,SECRET, (err, decoded) => {
            if( err )
                throw new Error("ERRO TOKEN");
            return decoded;
        })
    }
}
export { VerifyJWT }