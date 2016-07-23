/**
 * Created by Michael on 23.07.2016.
 */
import {User} from "./user";
import {Importer} from "../interfaces/importerInterface.ts"
/**
 * Created by Michael on 11.07.2016.
 */
const serverIdString:string = "Interne ID-Nummer";
const serverKlasseString:string = "Klasse";
const serverGebString:string = "Geburtsdatum";
const serverNachnameString:string = "Nachname";
const serverVornameString:string = "Vorname";

export class ServerImporter implements Importer {
    private lines:string[];
    private header:string[];
    private feldNummern;
    private userList:User[];

    constructor(private serverSource:string) {
        this.parse();
        this.createUserList();
    }

    private createUserList() {
        this.userList =  this.lines.map(l => this.getUser(l)).filter(u => !u.leer());
    }

    public getListText():string {
        let stringArray = this.lines.map( l =>
            this.getUser(l).toString()
        );
        return stringArray.join('\n\n');
    }

    public getList():User[] {
        return this.userList;
    }

    private parse() {
        this.lines = this.serverSource.split("\n");
        this.header = ServerImporter.lineToArray(this.lines.shift());
        this.feldNummern={};

        this.feldNummern[serverIdString] = this.header.indexOf(serverIdString);
        this.feldNummern[serverKlasseString] = this.header.indexOf(serverKlasseString);
        this.feldNummern[serverGebString] = this.header.indexOf(serverGebString);
        this.feldNummern[serverNachnameString] = this.header.indexOf(serverNachnameString);
        this.feldNummern[serverVornameString] = this.header.indexOf(serverVornameString);
    }

    private static lineToArray(line:string) {
        return line.split(";").map(h => h.trim().replace(/^"(.*)"$/, '$1'));
    }

    private getUser(line:string):User {
        let userArray = ServerImporter.lineToArray(line);
        return new User(
            userArray[this.feldNummern[serverVornameString]],
            userArray[this.feldNummern[serverNachnameString]],
            Number(userArray[this.feldNummern[serverIdString]]),
            "",
            "",
            "Schueler",
            userArray[this.feldNummern[serverKlasseString]]
        )
    }
}
