//
//  Friend.swift
//  Friends
//
//  Created by Leander Maenz on 08.10.24.
//
import Foundation

struct Friend: Codable, Identifiable {
    var id: Int?
    var lastName: String
    var city: String

    public static func testData() -> [Friend] {
        return [
            Friend(id: 1, lastName: "Smith", city: "New York"),
            Friend(id: 2, lastName: "Johnson", city: "Los Angeles"),
            Friend(id: 3, lastName: "Williams", city: "Chicago"),
            Friend(id: 4, lastName: "Jones", city: "Houston"),
            Friend(id: 5, lastName: "Brown", city: "Phoenix")
        ]
    }
}

