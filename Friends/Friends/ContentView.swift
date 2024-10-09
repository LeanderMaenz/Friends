//
//  ContentView.swift
//  Friends
//
//  Created by Leander Maenz on 08.10.24.
//

import SwiftUI

struct ContentView: View {
    let friends = Friend.testData()

    var body: some View {
        NavigationView {
            List {
                ForEach(friends) { friend in
                    HStack {
                        Text(friend.lastName)
                        Spacer()
                        Text(friend.city)
                            .foregroundColor(.gray)
                    }
                }
            }
            .navigationTitle("Friends")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

