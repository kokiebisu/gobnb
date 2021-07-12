terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
        }
    }
}

provider aws {
    profile = "personal"
    region = "us-east-1"
}

resource "aws_vpc" "nextbnb-vpc" {
   cidr_block = "10.0.0.0/16" 
   instance_tenancy = "default"
   enable_dns_support = true
   enable_dns_hostnames = true
   tags = {
       Name = "nextbnb-vpc"
   }
}

resource "aws_default_route_table" "nextbnb-public-route-table" {
    default_route_table_id = aws_vpc.nextbnb-vpc.default_route_table_id

    tags = {
        Name = "nextbnb-public-route-table"
    }
}

resource "aws_route_table" "nextbnb-private-route-table" {
    vpc_id = aws_vpc.nextbnb-vpc.id

    tags = {
        Name = "nextbnb-private-route-table"
    }  
}

resource "aws_route_table_association" "nextbnb-public-route-table" {
    route_table_id = aws_default_route_table.nextbnb-public-route-table.id
    subnet_id = aws_subnet.public-subnet.id
}

resource "aws_route_table_association" "nextbnb-private-route-table" {
    route_table_id = aws_route_table.nextbnb-private-route-table.id
    subnet_id = aws_subnet.private-subnet.id
}

resource "aws_subnet" "public-subnet" {
    availability_zone = "us-east-1a"
    cidr_block = "10.0.1.0/24"
    vpc_id = aws_vpc.nextbnb-vpc.id

    tags = {
        Name = "nextbnb-public-subnet"
    }
}

resource "aws_subnet" "private-subnet" {
    availability_zone = "us-east-1b"
    cidr_block = "10.0.2.0/24"
    vpc_id = aws_vpc.nextbnb-vpc.id

    tags = {
        Name = "nextbnb-private-subnet"
    }
}

